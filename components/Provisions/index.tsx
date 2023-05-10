import React from "react";
import { StyleSheet, View } from "react-native";

import PickerSelect from "../../components/PickerSelect";
import { ThemePickerSelect } from "../PickerSelect/types";
import Tabs from "../Tabs";
import { TabMode } from "../Tabs/types";

export default function Provisions() {
  return (
    <View style={styles.container}>
      <PickerSelect
        values={[
          "Coupe homme (cheveux courts)",
          "Coloration",
          "Coupe barbe",
          "Coupe femme (cheveux courts)",
          "Shampoing",
          "Massage",
        ]}
        selectLabel="Prestation"
        placeholder="Choisir une prestation"
        theme={ThemePickerSelect.GREEN}
      />
      <PickerSelect
        values={["Ponnappa", "John", "Hayman", "Salome", "Daly", "Natalie"]}
        selectLabel="Avec"
        placeholder="Choisir un collaborateur"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
