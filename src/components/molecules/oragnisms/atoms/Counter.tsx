import React, { useState } from "react";
import { Button, Text, TextInput, View, ActivityIndicator } from "react-native";
import { styles } from "../../../../styles/Styles";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator

  const increment = () => {
    setCounter(prev => prev + 1);
  };

  const decrement = () => {
    setCounter(prev => prev - 1);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    // Reset error message when user starts typing again
    setErrorMessage("");
  };

  const incrementBy = () => {
    // Parse the input value to a number
    const number = parseInt(inputValue);
    if (isNaN(number)) {
      // Show error message if input is not a number
      setErrorMessage("Please enter a valid number");
    } else {
      // Show loading indicator while processing
      setLoading(true);

      // Simulate asynchronous operation
      setTimeout(() => {
        // Increment counter by the parsed number
        setCounter(prev => prev + number);
        // Clear the input field
        setInputValue("");
        // Reset error message
        setErrorMessage("");
        // Hide loading indicator
        setLoading(false);
      }, 1000); // Simulate 1 second delay
    }
  };

  return (
    <View style={styles.CounterState}>
      <Text style={styles.TextCount}>Counter Value: {counter} </Text>
      <View>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <TextInput
          style={styles.TextCount}
          value={inputValue}
          onChangeText={handleInputChange}
          keyboardType="numeric"
          placeholder="Enter a number"
        />
        <Button title="Increment By" onPress={incrementBy} />
        {loading ? (
          <ActivityIndicator color="red" /> // Show loading indicator if loading is true
        ) : null}
        {errorMessage ? <Text style={styles.TextCount}>{errorMessage}</Text> : null}
      </View>
    </View>
  );
};

export default Counter;
