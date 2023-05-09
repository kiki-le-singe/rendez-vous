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
import CreateEditClientScreen from "../screens/CreateEditClientScreen";

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
      <Stack.Group>
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
      </Stack.Group>

      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="SelectClient" component={ModalSelectClientScreen} />
        <Stack.Screen
          name="CreateEditClient"
          component={CreateEditClientScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Routes;
