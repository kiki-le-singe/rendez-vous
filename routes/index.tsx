import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import RendezVousScreen from "../screens/RendezVousScreen";
import { useThemeColor } from "../components/Themed";
import Colors from "../constants/Colors";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import ModalSelectClientScreen from "../screens/SelectClientScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes(): JSX.Element {
  const backgroundColor = useThemeColor(
    { light: Colors.light.white, dark: Colors.dark.darkGrey },
    "text"
  );
  const color = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text"
  );

  return (
    <Stack.Navigator>
      <Stack.Group
      // screenOptions={{
      //   headerTintColor: colors.ORANGE,
      //   headerTitleStyle: {color: colors.WHITE},
      //   headerStyle: {
      //     backgroundColor: colors.BLUE_DARK,
      //   },
      //   headerRight,
      // }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RendezVous"
          component={RendezVousScreen}
          options={{
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor,
            },
            headerTitleStyle: { color },
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
            title: "Rendez-vous",
          }}
        />
        {/* <Stack.Screen
          name="Home"
          options={{
            title: 'Tell Me A Story...',
            headerBackVisible: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="WriteStory"
          options={{
            title: 'Write Your Own Story...',
          }}
          component={WriteStoryScreen}
        /> */}
      </Stack.Group>

      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="SelectClient" component={ModalSelectClientScreen} />
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Routes;
