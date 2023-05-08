import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type TStoryParams = {
//   story?: string | undefined;
// };

export type RootStackParamList = {
  Home: object | undefined;
  RendezVous: object | undefined;
  // Story: TStoryParams | undefined;
  SelectClient: object | undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type RendezVousScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "RendezVous"
>;

export type SelectClientScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SelectClient"
>;

// export type StoryScreenProps = NativeStackScreenProps<
//   RootStackParamList,
//   "Story"
// >;

// export type SettingsScreenProps = NativeStackScreenProps<
//   RootStackParamList,
//   "Settings"
// >;
