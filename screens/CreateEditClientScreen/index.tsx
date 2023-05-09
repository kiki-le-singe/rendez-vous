import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { View, useThemeColor } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { CreateEditClientScreenProps } from "../../routes/types";
import DownArrowIcon from "../../assets/svg/js/DownArrowIcon";
import FlagIcon from "../../assets/svg/js/FlagIcon";

export default function CreateEditClientScreen({
  route,
  navigation,
}: CreateEditClientScreenProps) {
  const { screenMode } = route.params;
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const backgroundColor = useThemeColor(
    { light: Colors.light.white, dark: Colors.dark.darkGreen },
    "text"
  );
  const borderColor = useThemeColor(
    { light: Colors.light.border, dark: Colors.dark.border },
    "text"
  );
  const color = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text"
  );
  const fontSize = email ? 13 : 12;
  const themeStyles = { backgroundColor, borderColor, color, fontSize };

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
    >
      <TextInput
        style={[styles.input, themeStyles]}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor={Colors.light.placeholder}
        keyboardType="email-address"
        autoCorrect={false}
      />
      <View>
        <View style={styles.iconsContainer}>
          <FlagIcon />
          <DownArrowIcon />
        </View>

        <TextInput
          style={[styles.input, themeStyles, styles.inputPhone]}
          onChangeText={setPhone}
          value={phone}
          placeholder="Téléphone"
          placeholderTextColor={Colors.light.placeholder}
          keyboardType="numeric"
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 16,
  },
  input: {
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  inputPhone: {
    paddingLeft: 52,
  },
  iconsContainer: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "transparent",
    width: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    height: "100%",
    paddingLeft: 12,
  },
});
