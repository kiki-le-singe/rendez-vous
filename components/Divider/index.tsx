import { StyleSheet, View } from "react-native";

import Colors from "../../constants/Colors";

export default function Divider() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: Colors.light.border,
    marginVertical: 22,
  },
});
