import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import { IconProps } from "./types";

export default function Icon({ children, onPress, size = 36 }: IconProps) {
  return !children ? null : (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: size, height: size }]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.light.darkGreen,
    justifyContent: "center",
    alignItems: "center",
  },
});
