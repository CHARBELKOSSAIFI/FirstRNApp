import React, { useState, useLayoutEffect } from 'react'; // Import useState and useLayoutEffect
import {View, Text, Button, Pressable, Alert, Image, ScrollView,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../navigation/MainNavigator.types';
import {settings, styles} from '../styles/Styles';
import meImage from '../assets/meee.jpg'; // Import the image file

const Settings = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  // const { toggleTheme } = useSettings(); // Access the toggleTheme function from the context
  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  //another message and in and name from another page
  const navigateToDetails = () => {
    navigation.navigate('Details', {
      message: 'Hello from Settings',
      userId: '789654',
      name: 'Kossaifi',
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.hdRight}>
          <Pressable
            onPress={() => {
              Alert.alert('Hello from this page');
            }}>
            <Image
              style={styles.hdRightImg}
              source={{
                uri: 'https://t3.ftcdn.net/jpg/04/21/37/06/360_F_421370602_8biYUFEBLFwpFpMl1UYIPy62BQJnjQdi.jpg',
              }}
            />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
    <View>
      <Text>Settings</Text>
      <Button title="Go to Home" onPress={navigateToHome} />
      <Button title="Go to Details" onPress={navigateToDetails} />
    </View>

    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <View style={settings.container}>
        {/* First row */}
        <Image
          style={isHovered ? [settings.image, settings.hovered] : settings.image}
          source={{
               uri: 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2022/11/Ski-Index-Header-01.jpg',
            }}

        />
        <Image
          style={isHovered ? [settings.image, settings.hovered] : settings.image}
          source={{
            uri:'https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg'
          }}
        />
        <Image
          style={isHovered ? [settings.image, settings.hovered] : settings.image}
          source={{
            uri:'https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg'
          }}
        />
      </View>

      <View style={settings.container}>
        {/* Second row */}
        <Image
          style={settings.image}
          source={{
            uri:'https://contents.mediadecathlon.com/s811924/k$ca918e255c946da5ea626691a0c5af6f/1800x0/2496pt1764/4894xcr3328/bienfaits_ski_bon_entrainement_cardio.jpg?format=auto'
          }}
        />
        <Image
          style={settings.image}
          source={{
            uri:'https://media.cnn.com/api/v1/images/stellar/prod/rei-skiiing-lead-cnnu.jpg?c=16x9'
          }}
        />
        <Image
          style={settings.image}
          source={meImage}
        />

      </View>
    </TouchableOpacity>
  </ScrollView>
);
};

export default Settings;