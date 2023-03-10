import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../context/AuthContext";

const SignInScreen = () => {
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const {login} = useContext(AuthContext);
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('SignIn!');
        navigation.navigate('HomeScreen');
    };
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };
    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
                source= {Logo} 
                style= { [styles.logo, {height: height * 0.3}] } 
                resizeMode="contain" 
            />
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />

            <CustomButton text="Sign In" onPress={() => login()} />
            <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
            <SocialSignInButtons />
            <CustomButton 
                text="Don't have an account? Create one"
                onPress={onSignUpPress}
                type="TERTIARY"
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default SignInScreen