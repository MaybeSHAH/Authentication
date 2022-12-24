import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Navigation from '../../navigation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,                                                           
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow'
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size} />
            )
        }} />
        <Tab.Screen name="Reservation" component={HomeScreen} options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: { backgroundColor: 'yellow'},
            tabBarIcon: ({color, size}) => (
                <Feather name="shopping-bag" color={color} size={size} />
            )
        }} />
        <Tab.Screen name="Profile" component={Navigation} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="heart-outline" color={color} size={size} />
            )
        }} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})