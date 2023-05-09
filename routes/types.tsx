import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenClientMode } from "../screens/CreateEditClientScreen/types";

export type CreateEditClientParams = {
  screenMode: ScreenClientMode.CREATE | ScreenClientMode.EDIT;
};

export type RootStackParamList = {
  Home: object | undefined;
  RendezVous: object | undefined;
  SelectClient: object | undefined;
  CreateEditClient: CreateEditClientParams | undefined;
};

// Define the types for route.params
type CreateEditClientScreenRouteProp = RouteProp<
  RootStackParamList,
  "CreateEditClient"
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
type CreateEditClientScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CreateEditClient"
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

// Define the props for CreateEditClientScreen component
export type CreateEditClientScreenProps = {
  navigation: CreateEditClientScreenNavigationProp;
  route: CreateEditClientScreenRouteProp;
};
