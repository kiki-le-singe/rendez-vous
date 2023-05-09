import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { UnderlineTextProps } from "./types";

export default function UnderlineText({
  icon = null,
  onPress = () => {},
  disabled = true,
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
      {<Text style={styles.text}>Info Client</Text>}
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
    fontSize: 13,
    textDecorationLine: "underline",
  },
});
