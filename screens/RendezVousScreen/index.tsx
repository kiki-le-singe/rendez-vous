import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import Card from "../../components/Card";
import ClientInput from "../../components/ClientInput";
import UnderlineText from "../../components/UnderlineText";
import PaperIcon from "../../assets/svg/js/PaperIcon";
import PenIcon from "../../assets/svg/js/PenIcon";
import BottomActions from "../../components/BottomActions";
import ActionsLinks from "../../components/ActionsLinks";
import Divider from "../../components/Divider";
import Calendar from "../../components/Calendar";
import PickerSelect from "../../components/PickerSelect";
import Overlay from "../../components/Overlay";

export default function RendezVousScreen() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [_selectName, setSelectName] = React.useState("");
  const [selectedProvision, setSelectedProvision] = React.useState("");
  const [selectedStylist, setSelectedStylist] = React.useState("");
  const [pickerSelectValues, setPickerSelectValues] =
    React.useState<string[]>();

  function handlePickerSelectPress(values: string[], selectName: string) {
    setPickerSelectValues(values);
    setSelectName(selectName === "provision" ? "provision" : "stylist");
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  function handleSelectItem(item: string, selectName: string) {
    alert(`${item} - ${selectName}`);
    selectName === "provision"
      ? setSelectedProvision(item)
      : setSelectedStylist(item);
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Card>
          <ClientInput editable={false} />
        </Card>

        <Card>
          <Calendar />
        </Card>

        <Card stylesContainer={styles.provisions}>
          <PickerSelect
            selectName="provision"
            values={[
              "Coupe homme (cheveux courts)",
              "Coloration",
              "Coupe barbe",
              "Coupe femme (cheveux courts)",
              "Shampoing",
              "Massage",
            ]}
            selectTitle="Prestation"
            placeholder="Choisir une prestation"
            onPress={handlePickerSelectPress}
            value={selectedProvision}
          />
          <PickerSelect
            selectName="stylist"
            values={["Ponnappa", "John", "Hayman", "Salome", "Daly", "Natalie"]}
            selectTitle="Avec"
            placeholder="Choisir un collaborateur"
            onPress={handlePickerSelectPress}
            value={selectedStylist}
          />
        </Card>

        <ActionsLinks>
          <UnderlineText text="Ajouter un titre" icon={<PaperIcon />} />
          <UnderlineText text="Ajouter une note" icon={<PenIcon />} />
        </ActionsLinks>

        <Divider />

        <BottomActions />
      </ScrollView>

      <Overlay
        isOpen={isOpen}
        onClose={handleClose}
        onSelectItem={handleSelectItem}
        values={pickerSelectValues}
        selectName={_selectName}
      />
    </>
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
    paddingBottom: 60,
  },
  provisions: {
    gap: 16,
  },
});
