import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from '../../navigation';
import {COLORS} from '../../constants/theme';
import CustomTabBarButton from '../CustomTabBarButton';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        //tabBarStyle: styles.tabBarStyle,
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
            return <Ionicons name={iconName} size={24} color={color} />
        },
    })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            //tabBarButton: props => <CustomTabBarButton {...props} />,
        }} />
        <Tab.Screen name="Reservation" component={HomeScreen} options={{
            //tabBarButton: props => <CustomTabBarButton {...props} />,
        }} />
        <Tab.Screen name="Profile" component={Navigation} options={{
            //tabBarLabel: '',
            //tabBarButton: props => <CustomTabBarButton {...props} />,
        }} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        flex:1,
        position: 'absolute',
        backgroundColor: COLORS.transparent,
        borderTopWidth: 0,
        bottom: 15,
        right: 10,
        left: 10,
        height: 58,
    }
})