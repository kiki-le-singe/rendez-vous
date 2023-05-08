import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { HomeScreenProps } from "../../routes/types";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  function handlePress() {
    navigation.navigate("RendezVous");
  }

  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <Text
        onPress={handlePress}
        style={styles.linkText}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}
      >
        Prise de Rendez-vous
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    fontSize: 16,
  },
});
