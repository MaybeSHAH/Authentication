import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from '../../navigation';
import {COLORS} from '../../constants/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if(route.name === "Home"){
                iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
            } else if(route.name === "Reservation"){
                iconName = focused ? 'settings' : 'settings-outline';
            } else if(route.name === "Profile") {
                iconName = focused ? 'wallet' : 'wallet-outline';
            }
            return <Ionicons name={iconName} size={22} color={color} />
        },
    })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Reservation" component={HomeScreen} />
        <Tab.Screen name="Profile" component={Navigation}  />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})