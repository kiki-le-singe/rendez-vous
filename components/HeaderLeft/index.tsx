import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "expo-router";

import Colors from "../../constants/Colors";
import BackArrow from "../../assets/svg/js/BackArrow";

export default function HeaderLeft() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <BackArrow />
    </TouchableOpacity>
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
