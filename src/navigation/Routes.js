import React, {useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { AuthContext } from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = user => {
        setUser(user);
        if(initializing) setInitializing(false);
    }
    const loginRequest = user => {
        database().ref('users/' + user.uid).once('value').then(function (snapshot){
            let username = snapshot.val();
            {!username.account ? console.log('errrrr') : console.log("DATA::", username.account)}
        }).catch(err => console.log("Routes Err::",err));
    };

    useEffect(()=> {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        // user && loginRequest(user);
        return subscriber; //unsubscribe on unmount
    }, []);
    
    if(initializing) return null;

    return (
        <NavigationContainer>
            {console.log("USER:: ",user)}
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>

    );

};

export default Routes;
