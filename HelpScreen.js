import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExampleAsyncStorage = () => {
  const [inputText, setInputText] = useState('');
  const [storedText, setStoredText] = useState('');
  
  const [items, setItems] = useState(['Karachi']);
  useEffect(() => {
    // Load the stored text from AsyncStorage when the component mounts
    loadStoredText();
  }, []);
  const addItem = () => {
    // Create a new array with the new item and update the state
    setItems([...items, storedText]);
  };
  

  const saveData = async () => {
    try {
      // Save the inputText to AsyncStorage
      await AsyncStorage.setItem('@MyApp:storedText', inputText);
     
      // Update the storedText state
      setStoredText(inputText);
      // Clear the inputText state
      setInputText('');
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
    
  };

  const loadStoredText = async () => {
    try {
      // Load the stored text from AsyncStorage
      const storedText = await AsyncStorage.getItem('@MyApp:storedText');
      

      // Update the storedText state if there is data
      if (storedText !== null) {
        setStoredText(storedText);
      }
      
    } catch (error) {
      console.error('Error loading data:', error);
    }
    const retrievedArray = await getArray('myArrayKey');
    console.log('Array',retrievedArray); 
  };


//PLAYING WITH ARRAYS
const saveArray = async (key, array) => {
  try {
    const jsonValue = JSON.stringify(array);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Array saved successfully');
  } catch (error) {
    console.error('Error saving array:', error);
  }
};
const getArray = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      const array = JSON.parse(jsonValue);
      return array;
    }
  } catch (error) {
    console.error('Error retrieving array:', error);
  }
};
// Save an array

saveArray('myArrayKey', items);

// Retrieve the array










  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, padding: 10, width: 200 }}
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        placeholder="Type something..."
      />
      <Button title="Save" onPress={saveData} />
      {storedText ? <Text>Stored Text: {storedText}</Text> : null}
      <Button title="Add Item" onPress={addItem} />
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default ExampleAsyncStorage;
