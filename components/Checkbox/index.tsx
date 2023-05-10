import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import Colors from "../../constants/Colors";
import { CheckBoxProps } from "./types";

export default function CheckBox({
  onPress = () => {},
  isChecked = false,
  label = null,
}: CheckBoxProps) {
  function handlePress() {
    onPress();
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.checkbox}>
        {isChecked && <Entypo name="check" size={12} />}
      </View>
      {label && <Text style={styles.textTime}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  checkbox: {
    width: 12,
    height: 12,
    borderColor: Colors.light.darkGreen,
    borderRadius: 2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTime: {
    fontSize: 13,
    color: Colors.light.darkGreen,
    fontWeight: "600",
  },
});
