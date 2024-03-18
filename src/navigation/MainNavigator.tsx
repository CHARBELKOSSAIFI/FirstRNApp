import {View, Text,} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

import { MainNavigatorStackParamList } from './MainNavigator.types';
import AppComponent from '../components/ThemeComponent';

const MainStackNavigator = createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator initialRouteName="Home"
    //here the screen option for all the pages
    // screenOptions={{
    //     headerStyle:{
    //       backgroundColor:'red',
    //     }
    // }}
    >
      <MainStackNavigator.Screen
       name="Home"
        component={Home}
        //here just for the Home
        options={{
          headerStyle:{
            backgroundColor:'red',
          },
          headerTintColor:'blue',
          headerTitleStyle:{
            fontSize:30,
            fontWeight:'900',
            color:'black'
          },
          headerTitleAlign:'center',
          headerShown:true
          }}
         />
      <MainStackNavigator.Screen
      name="Details"
      component={Details}
      options={{
            headerSearchBarOptions:{
            placeholder:"Enter your text",
            headerIconColor:'red',
            hintTextColor:'red'

          }
      }}  />
        <MainStackNavigator.Screen
      name="Settings"
      component={Settings}
      options={{
            headerSearchBarOptions:{
            placeholder:"Enter your text",
            headerIconColor:'red',
            hintTextColor:'red'

          }
      }}  />

    </MainStackNavigator.Navigator>
  );
};
export default MainNavigator;
