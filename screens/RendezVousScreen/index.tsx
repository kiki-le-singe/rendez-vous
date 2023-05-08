import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import Card from "../../components/Card";
import ClientInput from "../../components/ClientInput";
import Colors from "../../constants/Colors";

export default function RendezVousScreen() {
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <Card>
        <ClientInput editable={false} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 20,
    gap: 16,
  },
});
