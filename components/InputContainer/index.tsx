import React from "react";
import { StyleSheet, View } from "react-native";

import { InputContainerProps } from "./types";

export default function InputContainer({ children }: InputContainerProps) {
  return <View style={styles.textInputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
