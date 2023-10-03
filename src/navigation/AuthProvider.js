import React, {useEffect, createContext, useState} from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { GoogleSignin, statusCodes  } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=> {
        GoogleSignin.configure({webclientId: "1084633389960-kbkggp2nnsstut0b6hcke6rvbcio4uje.apps.googleusercontent.com",
      });
      }, []);

  return (
    <AuthContext.Provider
        value={{
            user,
            setUser,
            data,
            setData,
            login: async (email, password) => {
                try{
                    await auth().signInWithEmailAndPassword(email, password)
                } catch(e) {
                    console.log("Erro while logging in:: ", e);
                }   
            },
            signin: async () => {
                try {
                  await GoogleSignin.hasPlayServices();
                  const usrInfo = await GoogleSignin.signIn();
                  setData({ type: "google",
                    displayName: usrInfo.user.name, 
                    email: usrInfo.user.email, 
                    uid: usrInfo.user.id,
                    photo: usrInfo.user.photo });
            
                  setUser({ type: "google",
                    displayName: usrInfo.user.name, 
                    email: usrInfo.user.email, 
                    uid: usrInfo.user.id,
                    photo: usrInfo.user.photo });
                } catch (error) {
                  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // user cancelled the login flow
                  } else if (error.code === statusCodes.IN_PROGRESS) {
                    // operation (e.g. sign in) is in progress already
                  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    // play services not available or outdated
                  } else {
                    // some other error happened
                  }
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
                                console.log("UpdatedUser::", updatedUser);
                            }).then(()=>{
                                setUser(updatedUser)
                            })
                        })

                    })
                    .catch((err)=> console.log(err));
            },
            logout: async () => {
            try {
                if(user.type == "google") {
                    await GoogleSignin.signOut();
                    setUser(null); // Remember to remove the user from your app's state as well
                }
                else {
                    await auth().signOut();
                    setUser(null);
                }
            } catch (error) {
                console.error(error);
              }
                
            },

        }}
        >
            {children}

    </AuthContext.Provider>
  )
}