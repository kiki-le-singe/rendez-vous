import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../../../../constants/Colors";
import { ItemProps } from "./types";
import { TabMode } from "../../types";

export default function Item({
  stylesContainer = {},
  label = "",
  index = 0,
  isSelected = false,
  mode,
  onPress = (selectedIndex: number) => {},
}: ItemProps) {
  const isTabMode = mode === TabMode.TAB;

  function handlePress(selectedIndex: number) {
    isTabMode && onPress(selectedIndex);
  }

  return (
    <TouchableOpacity
      onPress={() => handlePress(index)}
      style={[
        styles.tab,
        stylesContainer,
        isSelected && styles.selectedTab,
        !isTabMode && styles.selectedTab,
      ]}
    >
      <Text
        style={[
          styles.label,
          isSelected && styles.selectedLabel,
          !isTabMode && styles.selectedLabel,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: Colors.light.lightGrey,
    borderWidth: 1,
    borderColor: Colors.light.border,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  label: {
    width: 80,
    textAlign: "center",
    color: Colors.light.placeholder,
  },
  selectedLabel: {
    color: Colors.light.darkGreen,
  },
  selectedTab: {
    backgroundColor: Colors.light.white,
  },
});
