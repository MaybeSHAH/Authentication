import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [code, setCode ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [passwordRepeat, setPasswordRepeat ] = useState('');
    const navigation = useNavigation();

    const onConfirmPress = () => {
        navigation.navigate('Home');
    };
    const onResendPress = () => {
        navigation.navigate('onResendPress');
    };

    const onTermsOfUsePressed = () => {
        console.warn('Terms Pressed!');
    };
    const onPrivacyPressed = () => {
        console.warn('Privacy!');
    };
    const onForgotPasswordPressed = () => {
        console.warn('Forgot!!');
    };
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Confirm your email </Text>
            <CustomInput 
                placeholder="Enter your confirmation code" 
                value={code} 
                setValue={setCode} 
            />

            <CustomButton 
                text="Confirm" 
                onPress={onConfirmPress} 
            />
            <CustomButton 
                text="Resend code" 
                onPress={onResendPress} 
                type='SECONDARY'
            />
            <CustomButton 
                text="Back to Sign in" 
                onPress={onSignInPress} 
                type='TERTIARY'
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
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    text: {
        color: 'grey',
        marginVertical: 10
    },
    link:{
        color: '#FDB075'
    }
})

export default ConfirmEmailScreen