import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import ClientInput from "../../components/ClientInput";

export default function ModalSelectClientScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <ClientInput />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 12,
  },
  inputContainer: {},
});
