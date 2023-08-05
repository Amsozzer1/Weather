import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExampleAsyncStorage = () => {
  const [inputText, setInputText] = useState('');
  const [storedText, setStoredText] = useState('');

  useEffect(() => {
    // Load the stored text from AsyncStorage when the component mounts
    loadStoredText();
  }, []);

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
  };

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
    </View>
  );
};

export default ExampleAsyncStorage;
