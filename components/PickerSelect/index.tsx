import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "../../constants/Colors";
import {
  PickerSelectProps,
  PickerSelectStyles,
  ThemePickerSelect,
} from "./types";
import DownArrowIcon from "../../assets/svg/js/DownArrowIcon";

export default function PickerSelect({
  placeholder,
  selectLabel,
  values = [],
  theme = ThemePickerSelect.BLUE,
}: PickerSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [item, setItem] = React.useState("");

  function handlePress() {
    setIsOpen(true);
  }

  function handleClosePress(item: string) {
    setItem(item);
    setIsOpen(false);
  }

  function renderItem(item: string, index: number) {
    return (
      <Text
        onPress={() => handleClosePress(item)}
        key={`PickerItem_${index}`}
        style={styles.item}
      >
        {item}
      </Text>
    );
  }

  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.select}>
          {item && <View style={[styles.shape, styles[theme]]} />}

          <View style={{ paddingLeft: item ? 8 : 16 }}>
            {item && <Text style={styles.label}>{selectLabel}</Text>}

            <View style={styles.valueContainer}>
              {item ? (
                <Text>{item}</Text>
              ) : (
                <Text style={styles.placeholder}>{placeholder}</Text>
              )}
            </View>
          </View>

          <DownArrowIcon width={10} height={5} />
        </View>
      </TouchableOpacity>

      {isOpen && (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
          {values.map(renderItem)}
        </ScrollView>
      )}
    </>
  );
}

const styles: PickerSelectStyles = StyleSheet.create({
  select: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.light.border,
  },
  placeholder: {
    color: Colors.light.placeholder,
    fontWeight: "400",
    fontSize: 13,
  },
  valueContainer: {
    paddingRight: 11,
  },
  contentContainerStyle: {
    gap: 12,
  },
  item: {
    fontSize: 13,
    color: Colors.light.darkGreen,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.light.border,
    textAlign: "center",
    padding: 8,
  },
  scrollView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.light.white,
    zIndex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.light.placeholder,
    marginBottom: 2,
  },
  shape: {
    height: "100%",
    width: 8,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  blue: {
    backgroundColor: Colors.light.blue,
  },
  green: {
    backgroundColor: Colors.light.green,
  },
});
