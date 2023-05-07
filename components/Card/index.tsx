import React from "react";
import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import { View, useThemeColor } from "../Themed";
import { CardProps } from "./types";

export default function Card({ children, stylesContainer = {} }: CardProps) {
  const borderColor = useThemeColor(
    { light: Colors.light.border, dark: Colors.dark.border },
    "text"
  );

  return (
    <View
      lightColor={Colors.light.cardBackground}
      darkColor={Colors.dark.cardBackground}
      style={[styles.container, { borderColor, ...stylesContainer }]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    paddingLeft: 12,
    paddingRight: 20,
    borderRadius: 8,
    borderWidth: 1,
  },
});
