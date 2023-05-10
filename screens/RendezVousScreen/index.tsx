import { StyleSheet, ScrollView } from "react-native";

import Card from "../../components/Card";
import ClientInput from "../../components/ClientInput";
import UnderlineText from "../../components/UnderlineText";
import PaperIcon from "../../assets/svg/js/PaperIcon";
import PenIcon from "../../assets/svg/js/PenIcon";
import BottomActions from "../../components/BottomActions";
import ActionsLinks from "../../components/ActionsLinks";

export default function RendezVousScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Card>
        <ClientInput editable={false} />
      </Card>

      <ActionsLinks>
        <UnderlineText text="Ajouter un titre" icon={<PaperIcon />} />
        <UnderlineText text="Ajouter une note" icon={<PenIcon />} />
      </ActionsLinks>

      <BottomActions />
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
});
