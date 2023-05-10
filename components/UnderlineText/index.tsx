import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { UnderlineTextProps } from "./types";
import Colors from "../../constants/Colors";

export default function UnderlineText({
  icon = null,
  onPress = () => {},
  disabled = true,
  text,
  textColor = Colors.light.darkGreen,
}: UnderlineTextProps) {
  function handlePress() {
    onPress();
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      style={styles.container}
    >
      {icon}
      {<Text style={[styles.text, { color: textColor }]}>{text}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  text: {
    fontWeight: "600",
    fontSize: 13,
    textDecorationLine: "underline",
  },
});
