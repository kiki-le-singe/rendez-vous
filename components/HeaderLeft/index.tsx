import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import Colors from "../../constants/Colors";

export function HeaderLeft() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.button}>
        <Text>Back</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: "100%",
    marginBottom: 4,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: Colors.light.green,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
