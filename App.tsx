import React from 'react';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import { View } from 'react-native';
import { AppContextProvider } from './src/store/context';
import AppComponent from './src/components/ThemeComponent';
import {AppContext} from './src/store/context';

// import ThemeSwitcher from './src/components/molecules/oragnisms/atoms/ThemeSwitcher';
// import ThemeContext from './src/components/molecules/oragnisms/atoms/ThemeContext';
const App = () => {
  return (

<AppContextProvider>
    <NavigationContainer>
      <MainNavigator />
      <AppComponent />
    </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
