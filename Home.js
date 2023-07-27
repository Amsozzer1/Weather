import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image,ScrollView,FlatList,Switch } from 'react-native';
import React, { useEffect, useState,Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { ListItem, SearchBar } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
//import {DATA} from './CITIES.js';

import { MainStackNavigator } from "./MainNavigation.js";

import {BottomTabNavigator} from "./TabNavigator.js";
import { WeatherScreen } from "./WeatherScreen.js";

const Home = ({ navigation }) => {
  return (

        <ScrollView style= {{backgroundColor: 'lightblue' }} >

<TouchableOpacity onPress={()=>{console.log("PRESSED");}}>
<View style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
<View style = {{height:150,width:300,backgroundColor:'lightyellow', borderRadius:25,top:'15%',display:'flex',justifyContent:'center',alignItems:'center'}}>
<Image style={{height:50,width:50,borderRadius:50,position:'absolute',left:10}} source = {{uri:"https://media.licdn.com/dms/image/C5603AQHGSuP6AwTDkg/profile-displayphoto-shrink_800_800/0/1668055956618?e=1695254400&v=beta&t=DHQL0R8BJV2y5ZHbfB8TzdXyqzRARrVt-NwfjI9BJ4A"}}></Image>
<Text style={{position:'relative',fontSize:20,fontWeight:'bold'}}>Ahmed M Sozzer</Text>
<Text style={{fontSize:15,fontWeight:'bold',top:100,position:'absolute'}}>Software Engineer</Text>
</View>
</View>
</TouchableOpacity>


</ScrollView>

  );
};


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
    container: {
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 10,
      backgroundColor: '#F5F5F5',
    },
    item: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      marginVertical: 8,
      borderRadius: 5,
    },
    title: {
      fontSize: 18,
    },
    
    loadingText: {
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 18,
      color: '#666666',
    },
    noResultsText: {
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 18,
      color: '#666666',
    },
    containerSettings: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    titleSettings: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    settingLabel: {
      fontSize: 18,
    },
    settingValue: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      marginRight: 10,
    },
    optionText: {
      fontSize: 16,
      color: '#333333',
    },
    selectedOption: {
      backgroundColor: '#007AFF',
      borderColor: '#007AFF',
    },
    selectedOptionText: {
      color: '#FFFFFF',
    },
    themeLabel: {
      fontSize: 16,
      marginHorizontal: 8,
    },
  });
  
export {Home};