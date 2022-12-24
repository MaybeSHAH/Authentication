import { Animated, View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Logo from '../../assets/images/Logo_1.png';
import TabNavigator from '../TabNavigator';

const BGColor = "#4D4A95";

const SplashScreen = () => {
    //Safe area view
    const edges= useSafeAreaInsets();

    //Animation Values
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling down both logo and title
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation
    const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    useEffect(() => {
        //starting Animation after 500ms
        setTimeout(() => {
           Animated.parallel([
            Animated.timing(
                startAnimation,
                {
                    // for same Height for non safe Area Devices... 
                    toValue: -Dimensions.get('window').height + (edges.top + 100),
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                scaleLogo,
                {
                    // Scaling to 0.35
                    toValue: 0.60,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                scaleTitle,
                {
                    // Scaling to 0.8
                    toValue: 0.8,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                moveLogo,
                {
                    // Moving to right most ...
                    toValue: {
                        x: (Dimensions.get("window").width / 2) - 35,
                        y: (Dimensions.get("window").height / 2 - 25)
                    },
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                moveTitle,
                {
                    // Moving to right most ...
                    toValue: {
                        x: 0,
                        // Since image size is 100...
                        y: (Dimensions.get("window").height / 2 - 90)
                    },
                    useNativeDriver: true
                }
            )
           ]).start(); 
        }, 500);
    },[])

    //Going to Move up like a Navbar...
  return (
    <View style={styles.root}>
    <Animated.View style={[styles.container, {
        transform: [
            {translateY: startAnimation }
        ]
    }]}>
      <Animated.View style={styles.logocontainer}>
        <Animated.Image 
            source={Logo}
            style= {[styles.logo, {
                transform: [
                    {translateX: moveLogo.x},
                    {translateY: moveLogo.y},
                    {scale: scaleLogo},
                    
                ]
            }]}
            resizeMode='contain' 
        />
        <Animated.Text style={[styles.text, {
            transform: [
                {translateY: moveTitle.y},
                {scale: scaleTitle}
            ]
        }]}>
          Mr Cars Wash
        </Animated.Text>
      </Animated.View>
      

    </Animated.View>
    <Animated.View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.04)',
        zIndex: 0
    }}>
        
        <TabNavigator />
        
    </Animated.View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,   
    },
    container: {
        flex:1,
        backgroundColor: BGColor,
        zIndex: 1,
    },
    logocontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 100,
        height: 100,
        paddingBottom: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});