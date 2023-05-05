import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Link } from "expo-router";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <Link href="/rendezVous" style={styles.link}>
        <Text
          style={styles.linkText}
          lightColor={Colors.light.text}
          darkColor={Colors.dark.text}
        >
          Prise de Rendez-vous
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 16,
  },
});
