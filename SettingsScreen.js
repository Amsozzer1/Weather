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
class SettingsScreen extends Component {
    state = {
      temperatureUnit: 'Celsius', // Default temperature unit
      isDarkModeEnabled: false, // Default theme is light mode
    };
  
    handleTemperatureUnitChange = (unit) => {
      this.setState({ temperatureUnit: unit });
    };
  
    handleThemeToggle = () => {
      this.setState((prevState) => ({ isDarkModeEnabled: !prevState.isDarkModeEnabled }));
    };
  
    render() {
      const { temperatureUnit, isDarkModeEnabled } = this.state;
  
      return (
        <View style={styles.containerSettings}>
          <Text style={styles.titleSettings}>Settings</Text>
  
          {/* Temperature Unit */}
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Temperature Unit:</Text>
            <View style={styles.settingValue}>
              <TouchableOpacity
                style={[styles.optionButton, temperatureUnit === 'Celsius' && styles.selectedOption]}
                onPress={() => this.handleTemperatureUnitChange('Celsius')}
              >
                <Text style={[styles.optionText, temperatureUnit === 'Celsius' && styles.selectedOptionText]}>Celsius</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, temperatureUnit === 'Fahrenheit' && styles.selectedOption]}
                onPress={() => this.handleTemperatureUnitChange('Fahrenheit')}
              >
                <Text style={[styles.optionText, temperatureUnit === 'Fahrenheit' && styles.selectedOptionText]}>Fahrenheit</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          {/* Theme */}
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Theme:</Text>
            <View style={styles.settingValue}>
              <Text style={styles.themeLabel}>Light</Text>
              <Switch value={isDarkModeEnabled} onValueChange={this.handleThemeToggle} />
              <Text style={styles.themeLabel}>Dark</Text>
            </View>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
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
  
export {SettingsScreen};
  