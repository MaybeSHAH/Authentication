import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useState} from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
        value={{
            user,
            setUser,
            login: async (email, password) => {
                try{
                    await auth().signInWithEmailAndPassword(email, password)
                } catch(e) {
                    console.log(e);
                }   
            },
            register: async (email, password, username) => {
                    await auth().createUserWithEmailAndPassword(email, password)
                    .then((authData)=> {
                        // ******** Firebase will create a route with whatever KEY is fed to the .set method ********
                        // ******** We dont actually want this to avoid deep nesting ********
                        // ******** So we package up our user.account object and .set(account) without any key value pairs ********
                        // console.log("authData:: ", authData);
                        let account = {}
                        account.email = email.toLowerCase();
                        account.uid = authData.user.uid;
                        account.username = username;
                        database().ref('users/' + authData.user.uid).set({account})
                        .then(()=>{
                            let updatedUser;
                            // ******** Now we need to grap a snapshot from the DB to validate account creation and update the redux store locally ********
                            database().ref('users/' + authData.user.uid).once('value').then(function (snapshot) {
                                updatedUser = snapshot.val();
                            }).then(()=>{
                                setUser(updatedUser)
                            })
                        })

                    })
                    .catch((err)=> console.log(err));
            },
            logout: async () => {
                try{
                    await auth().signOut();
                } catch(e){
                    console.log(e);
                }
            },

        }}
        >
            {children}

    </AuthContext.Provider>
  )
}