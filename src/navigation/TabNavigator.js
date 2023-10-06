import React, {useMemo, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { COLORS } from '../constants/theme';
import icons from '../constants/icons';
import images from '../constants/images';
import HomepageScreen from '../screens/HomepageScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';
import JoinPage from '../screens/JoinPage';
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isConstructorDeclaration } from 'typescript';
// import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from './AuthProvider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}) => {
  const {data} = useContext(AuthContext);
  const srcData = useMemo(()=> {
    return data.photo ? {uri: data.photo} : require('../assets/images/user-profile.jpg'); 
  }, [data]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomepageScreen}
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: ()=> (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' handlePress={ () => navigation.openDrawer() } />),
          headerRight: ()=> (
          <ScreenHeaderBtn iconUrl={srcData} dimension='100%' />),
          headerTitle: "",
          }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="JoinPage"
        component={JoinPage}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
