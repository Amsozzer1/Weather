import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';

let city = '';
export default class HelpScreen extends React.Component {
  state = {
    search: "",
    DATA: [],
  };
  
  updateSearch = (search) => {
    this.setState({ search });
  };

  updateDATA = () => {
    fetch("http://api.weatherapi.com/v1/search.json?key=98f5b2c716714f4b9b581625231207&q=" + this.state.search)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ DATA: data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { search } = this.state;

    return (
      <View style = {[styles.container]}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          onSubmitEditing={this.updateDATA}
          
        />
        

          {/* Correct the syntax for FlatList */}
          <FlatList
            data={this.state.DATA}
            renderItem={({ item }) => <Text style={styles.searchContainer} onPress={()=>{console.log(item.name);city = item.name;}}>{item.name}</Text>}
            keyExtractor={(item) => item.id.toString()} // Make sure to convert the ID to a string
            
          />

      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    listItem: {
      padding: 10,
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      
  
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      marginTop: 20,
    },
    input: {
      flex: 1,
      marginLeft: 10,
    },
    
    
  });
  export {city};