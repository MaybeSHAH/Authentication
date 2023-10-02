import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useState} from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);
  return (
    <AuthContext.Provider
        value={{
            user,
            setUser,
            data,
            setData,
            login: async (email, password) => {
                try{
                    console.log(email, password);
                    await auth().signInWithEmailAndPassword(email, password)
                } catch(e) {
                    console.log("ERROR:: ", e);
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
                        account.displayName = username;
                        database().ref('users/' + authData.user.uid).set({account})
                        .then(()=>{
                            let updatedUser;
                            // ******** Now we need to grap a snapshot from the DB to validate account creation and update the redux store locally ********
                            database().ref('users/' + authData.user.uid).once('value').then(function (snapshot) {
                                updatedUser = snapshot.val();
                                console.log("UpdatedUser::", updatedUser);
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