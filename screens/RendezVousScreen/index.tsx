import { StyleSheet, View as RNView, ScrollView } from "react-native";

import { View } from "../../components/Themed";
import Card from "../../components/Card";
import ClientInput from "../../components/ClientInput";
import Colors from "../../constants/Colors";
import UnderlineText from "../../components/UnderlineText";
import PaperIcon from "../../assets/svg/js/PaperIcon";
import PenIcon from "../../assets/svg/js/PenIcon";

export default function RendezVousScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Card>
        <ClientInput editable={false} />
      </Card>

      <RNView style={styles.actionsLink}>
        <UnderlineText text="Ajouter un titre" icon={<PaperIcon />} />
        <UnderlineText text="Ajouter une note" icon={<PenIcon />} />
      </RNView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  contentContainerStyle: {
    gap: 16,
  },
  actionsLink: {
    flexDirection: "row",
    gap: 18,
  },
});
