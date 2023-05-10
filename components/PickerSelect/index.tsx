import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../../constants/Colors";
import { PickerSelectProps } from "./types";
import DownArrowIcon from "../../assets/svg/js/DownArrowIcon";

export default function PickerSelect({
  onPress = () => {},
  placeholder,
  selectTitle,
  values = [],
  selectName,
  value = null,
}: PickerSelectProps) {
  const [isPicked, setIsPicked] = React.useState(false);

  function handlePress() {
    onPress(values, selectName);
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.select}>
        {isPicked && <Text>{selectTitle}</Text>}
        <View style={styles.valueContainer}>
          <Text style={styles.placeholder}>{placeholder}</Text>
          {value && <Text>{value}</Text>}
          <DownArrowIcon width={10} height={5} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.light.border,
  },
  select: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  placeholder: {
    color: Colors.light.placeholder,
    fontWeight: "400",
    fontSize: 13,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
});
