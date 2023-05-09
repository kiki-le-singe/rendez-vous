import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenClientMode } from "../screens/CreateEditClientScreen/types";


export type RootStackParamList = {
  Home: object | undefined;
  RendezVous: object | undefined;
  SelectClient: object | undefined;
};

  RootStackParamList,
>;

// Define the types for navigation prop
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
type RendezVousScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RendezVous"
>;
type SelectClientScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SelectClient"
>;
// Define the props for HomeScreen component
export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

// Define the props for RendezVousScreen component
export type RendezVousScreenProps = {
  navigation: RendezVousScreenNavigationProp;
};

// Define the props for SelectClient component
export type SelectClientScreenProps = {
  navigation: SelectClientScreenNavigationProp;
};

