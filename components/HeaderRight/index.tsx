import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

import Colors from "../../constants/Colors";
import CheckIcon from "../../assets/svg/js/CheckIcon";

export default function HeaderRight() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <CheckIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.light.green,
    backgroundColor: Colors.light.green,
    justifyContent: "center",
    alignItems: "center",
  },
});
