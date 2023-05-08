import React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { RecoilRoot } from "recoil";

import Routes from "./routes";

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <RecoilRoot>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
