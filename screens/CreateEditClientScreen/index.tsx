import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { CreateEditClientScreenProps } from "../../routes/types";

export default function CreateEditClientScreen({
  route,
  navigation,
}: CreateEditClientScreenProps) {
  const { screenMode } = route.params;

  function handlePress() {
    navigation.navigate("RendezVous");
  }

  React.useEffect(() => {
    console.log("screenMode", screenMode);
  }, []);

  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
