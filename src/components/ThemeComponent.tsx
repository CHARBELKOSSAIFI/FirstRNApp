import { StatusBar } from 'react-native';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useContext} from 'react';
import {AppContext} from '../store/context';

import {AppContextProvider} from '../store/context';
export  function ThemeComponent() {
  const {theme,setTheme} = useContext(AppContext);

  const styles = StyleSheet.create({
      container: {
      backgroundColor: theme == 'light' ? '#000' : '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:'auto',
      //height:'100%'
    },
      text:{
          color: theme == 'light' ? '#fff' : '#000',
      }
  });
  return (
      <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Button onPress={() => theme == 'light' ? setTheme('dark') : setTheme('light')} title={`Change theme`} />
      <StatusBar style={"auto"} />
      </View>
  );
}
export default ThemeComponent;