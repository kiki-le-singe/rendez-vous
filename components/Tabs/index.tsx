import React from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../../constants/Colors";
import { TabMode, TabsProps } from "./types";
import Item from "./components/Item";

export default function Tabs({
  labels = [],
  icon = null,
  mode = TabMode.TAB,
}: TabsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const labelsLength = labels.length;

  function handlePress(index: number) {
    setSelectedIndex(index);
  }

  function renderTabs() {
    return labels.map((tab, index) => {
      let _styles;

      if (index === 0) {
        // first tab
        _styles = styles.firstTab;
      } else if (index === labelsLength - 1) {
        // last tab
        _styles = styles.lastTab;
      } else {
        // middle tab
        _styles = styles.middleTab;
      }

      return (
        <Item
          key={`Tabs_${index}`}
          index={index}
          stylesContainer={_styles}
          label={tab}
          onPress={handlePress}
          isSelected={selectedIndex === index}
          mode={mode}
        />
      );
    });
  }

  return !labels.length ? null : (
    <View style={styles.container}>
      {icon}
      <View style={styles.tabContainer}>{renderTabs()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  tabContainer: {
    flexDirection: "row",
  },
  firstTab: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderRightWidth: 1,
    borderRightColor: Colors.light.border,
  },
  lastTab: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderLeftWidth: 1,
    borderLeftColor: Colors.light.border,
  },
  middleTab: {},
});
