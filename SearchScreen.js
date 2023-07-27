import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import {DATA} from "./CITIES.js";
//import {WeatherScreen} from "./WeatherScreen.js";
var city = "";
const SearchBar = ({ value, onChangeText, onSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSearch}
      />
      <Ionicons name="ios-search" size={24} color="black" />
    </View>
  );
};

const MainScreen = ({navigation}) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
  
    // Sample data list
    const dataList = [
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: 'Another Item' },
      { id: 4, title: 'Something' },
      // Add more items to the list as needed
    ];
  
    const handleSearch = () => {
      // Filter the dataList based on the searchValue
      const filteredList = DATA.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredList);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>React Native Search Bar</Text>
        <SearchBar
          value={searchValue}
          onChangeText={setSearchValue}
          onSearch={handleSearch}
        />
  
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.searchContainer } onPress={()=> {console.log(item.title+" PRESSED");city = item.title;navigation.navigate('About')}}>{item.title}</Text>
          )}
          // Add any additional FlatList props you may need
        />
      </View>
    );
  };
  
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

export { MainScreen,city };
