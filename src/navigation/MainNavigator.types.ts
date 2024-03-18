import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MainNavigatorStackParamList = {
Home: undefined;
Details: {
  message: string;
  userId: string;
  name: string;
 };
 Settings:undefined;
};

export type MainNavigatorNavigationProp =
  NativeStackNavigationProp<MainNavigatorStackParamList>;

export type MainNavigatorRouteProp =
RouteProp<MainNavigatorStackParamList>;
