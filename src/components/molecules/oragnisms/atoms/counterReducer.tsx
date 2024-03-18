//counter with useReducer

import React, { useReducer } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../../../../styles/Styles";

// Define the action types
type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "INCREMENT_BY"; payload: number };

// Define the reducer function
 const Reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_BY":
      return state + action.payload;
    default:
      return state;
  }
};

const Counter = () => {
  // Initialize state using useReducer
  const [counter, dispatch] = useReducer(Reducer, 0);

  return (
    <View style={styles.CounterState}>
      <Text style={styles.TextCount}>Counter Value: {counter} </Text>
      <View>
        <Button title="Increment" onPress={() => dispatch({ type: "INCREMENT" })} />
        <Button title="Decrement" onPress={() => dispatch({ type: "DECREMENT" })} />
        <Button title="IncrementBy10" onPress={() => dispatch({ type: "INCREMENT_BY", payload: 10 })} />
      </View>
    </View>
  );
};

export default Counter;
