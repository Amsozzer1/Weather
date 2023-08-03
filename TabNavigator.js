
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./MainNavigation.js";
import { Ionicons } from '@expo/vector-icons';
import SearchScreen, {MainScreen} from "./SearchScreen.js";
import {SettingsScreen} from "./SettingsScreen.js";
import HelpScreen from "./HelpScreen.js";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'HomeScreen') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          else if (route.name === 'Search') {
            iconName = focused ? 'ios-search-circle' : 'ios-search-circle-outline';
          }
  
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
       >
        <Tab.Screen name="HomeScreen" component={MainStackNavigator} options={{ tabBarBadge: 3,headerShown:false, title: "Home"}} />
        <Tab.Screen name="Search" component={SearchScreen} options={{headerShown:true, title:"Search", headerPressOpacity:0}}/>
        <Tab.Screen name="Settings" component={SettingsScreen}  options={{headerShown:true, title:"Settings"}}/>
  
      </Tab.Navigator>
  );
};

export {BottomTabNavigator};





