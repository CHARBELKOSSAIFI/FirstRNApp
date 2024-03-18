import {
  View,
  Text,
  Button,
  ScrollView,
  Pressable,
  Alert,
  Image,
  StyleSheet,
  PixelRatio,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {MainNavigatorStackParamList} from '../navigation/MainNavigator.types';
import {details, styles} from '../styles/Styles';

const size = 50;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

const Details = () => {
  const navigation = useNavigation();
  const {params} =
    useRoute<RouteProp<MainNavigatorStackParamList, 'Details'>>();
  const {message, userId, name} = params ?? {};

  const navigateToHome = () => {
    navigation.goBack();
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
              // resizeMode="cover"
            />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      style={{ flex: 1,  top: 0, right: 0 }}
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <View>
        <Text>ScreenA</Text>
        <Text style={{ fontSize: 40 }}>Message: {message}</Text>
        <Text style={{ fontSize: 40 }}>UserId: {userId}</Text>
        <Text style={{ fontSize: 40 }}>Name: {name}</Text>
      </View>
      <View>
        <Button title="Go back" onPress={navigateToHome} />
      </View>

      {/* Second ScrollView */}
      <ScrollView style={{marginTop:100}}>
        <View style={details.container} >
          <Text>require images with a pixel width of</Text>
          <Text style={details.value}>
            {PixelRatio.getPixelSizeForLayoutSize(size)} px
          </Text>
          <Image
            source={cat}
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(size),
              height: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
          />
        </View>
      </ScrollView>
    </ScrollView>

  );
};
export default Details;







