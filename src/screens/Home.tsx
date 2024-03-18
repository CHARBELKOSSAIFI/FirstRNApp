import {View, Text, Button} from 'react-native';
import React, { useState } from 'react';
import {ThemeProvider, useNavigation} from '@react-navigation/native';
import { MainNavigatorNavigationProp } from '../navigation/MainNavigator.types';
import { styles, text } from '../styles/Styles';
import Counter from '../components/molecules/oragnisms/atoms/Counter';
import  Reducer  from '../components/molecules/oragnisms/atoms/counterReducer';

// import ThemeContext from '../components/molecules/oragnisms/atoms/ThemeContext';
// import ThemeSwitcher from '../components/molecules/oragnisms/atoms/ThemeSwitcher';
//import { SettingsProvider, useSettings } from '../contexts/SettingsContext'; // Import the useSettings hook


const Home = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  //const { theme,  } = useSettings(); // Access the current theme and toggle function from the context


  const navigateToSettings = () => {
    navigation.navigate('Settings');
};
   const navigateToDetails = () => {
    //question about it
    navigation.navigate('Details',{
      message:"hello from Details",
      userId:"123456",
      name:"charbel"
    });
  };

  return (


    <View style={styles.Button}>
      <Text>Home</Text>
      <View style={styles.Buttons}>
      <Button title="Home" />
      </View>

      <View style={styles.Buttons}>
      <Button title="Details" onPress={navigateToDetails}  />
      </View>

      <View style={styles.Buttons} >
      <Button title="Settings" onPress={navigateToSettings}  />
      </View>

      {/* <View style={{ backgroundColor: theme.backgroundColor, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: theme.textColor }}>Home Page</Text>
    </View> */}

        <Counter/>

<Text style={text.textHome1}>
We are implementing a counter feature using the useState hook in React.
 The counter includes functionalities such as incrementing, decrementing, and incrementing by a specified value entered by the user.
 The increment and decrement buttons allow the user to adjust the counter by one.
 </Text>

 <Text style={text.textHome2}>
 while the increment-by feature enables the user to input a numeric value in a text field for more precise adjustments.
 with a 1 second of loading,
However, to ensure data integrity, we must handle user input validation meticulously.
If the user enters a non-numeric character into the input field,
we will display an error message indicating that only numeric values are accepted for incrementing the counter.
 This error handling mechanism ensures a seamless and error-free user experience.
 </Text>

<Reducer/>

<Text style={{backgroundColor:'red',fontSize:30}}>
  We are doing This Counter with UseReducer
</Text>

  </View>
);
};
export default Home;
