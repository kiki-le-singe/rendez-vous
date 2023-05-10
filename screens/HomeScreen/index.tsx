import { Platform, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { HomeScreenProps } from "../../routes/types";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  function handlePress() {
    navigation.navigate("RendezVous");
  }

  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <Text
        onPress={handlePress}
        style={styles.linkText}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}
      >
        Prise de Rendez-vous
      </Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    fontSize: 16,
  },
});
