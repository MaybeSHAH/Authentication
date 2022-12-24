/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet, 
  Text,
  View,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import slides from './slides';
import {COLORS, SIZES} from './src/constants/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/components/SplashScreen';

const App = () => {
  //SafeArea Calculations
  

  //below code for boarding
  const [showHomePage, setShowHomePage] = useState(false);
  const buttonLabel = (label) => {
    return(
      <View style={styles.label}>
        <Text style= {{ 
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage){
    return(
      <AppIntroSlider 
        data={ slides }
        renderItem={({item})=> {
          return(
            <View style={{
              flex:1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 100,
            }}>
              <Image 
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 400,
                }}
                resizeMode= 'contain'
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}>
                {item.title}
              </Text>
              <Text style={styles.description}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={styles.dotstyle}
        renderNextButton={()=> buttonLabel("Next")}
        renderSkipButton={()=> buttonLabel("Skip")}
        renderDoneButton={()=> buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    )

  }
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SplashScreen />
      </SafeAreaProvider>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FBFC'
  },
  description:{
    textAlign: 'center',
    paddingTop: 5,
    color: COLORS.title
  },
  dotstyle:{
    backgroundColor: COLORS.primary,
    width: 30
  },
  label: {
    padding: 12
  }
});

export default App;
