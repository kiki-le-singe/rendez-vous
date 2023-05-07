import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { ButtonProps, TStyles } from "./types";
import Colors from "../../constants/Colors";

export default function Button({
  label,
  theme = "light",
  onPress = () => {},
}: ButtonProps) {
  const labelTheme = theme === "light" ? "lightLabel" : "label";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[theme]]}
    >
      <Text style={styles[labelTheme]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles: TStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 6,
  },
  green: {
    backgroundColor: Colors.light.green,
  },
  red: {
    backgroundColor: Colors.light.red,
  },
  darkBlue: {
    backgroundColor: Colors.light.darkBlue,
  },
  light: {
    backgroundColor: Colors.light.white,
    borderWidth: 1,
    borderColor: Colors.light.darkGreen,
  },
  label: {
    color: Colors.light.white,
  },
  lightLabel: {
    color: Colors.light.darkGreen,
  },
});
