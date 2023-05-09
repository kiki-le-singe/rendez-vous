import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import { IconProps } from "./types";

export default function Icon({ children }: IconProps) {
  return !children ? null : (
    <TouchableOpacity style={styles.container}>{children}</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.light.darkGreen,
    justifyContent: "center",
    alignItems: "center",
  },
});
