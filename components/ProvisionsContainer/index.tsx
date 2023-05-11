import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PickerSelect from "../../components/PickerSelect";
import { ThemePickerSelect } from "../PickerSelect/types";
import Colors from "../../constants/Colors";
import Icon from "../Icon";
import BinIcon from "../../assets/svg/js/BinIcon";
import { ProvisionsContainerProps } from "./types";
import CopyIcon from "../../assets/svg/js/CopyIcon";

const ProvisionsContainer = ({
  index,
  provisionsLength,
  removeProvision,
}: ProvisionsContainerProps) => {
  const [isReset, setIsReset] = React.useState(false);

  function handleResetPickerSelect(isReset: boolean) {
    setIsReset(isReset);
  }

  function handleCleanProvision() {
    if (provisionsLength > 1) {
      removeProvision(index);
    } else {
      handleResetPickerSelect(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <CopyIcon />
      </View>

      <View style={styles.pickers}>
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
          isReset={isReset}
          handleResetPickerSelect={handleResetPickerSelect}
        />
        <PickerSelect
          values={["Ponnappa", "John", "Hayman", "Salome", "Daly", "Natalie"]}
          selectLabel="Avec"
          placeholder="Choisir un collaborateur"
          isReset={isReset}
          handleResetPickerSelect={handleResetPickerSelect}
        />

        <View style={styles.tabsContainer}>
          <View style={styles.tabs}>
            <View style={[styles.tab, styles.tabLeft]}>
              <Text>60</Text>
            </View>
            <View style={[styles.tab, styles.tabRight]}>
              <Text>Min</Text>
            </View>
          </View>

          <View style={styles.tabs}>
            <View style={[styles.tab, styles.tabLeft]}>
              <Text>60</Text>
            </View>
            <View style={[styles.tab, styles.tabRight]}>
              <Text>€</Text>
            </View>
          </View>

          <Icon size={46} onPress={handleCleanProvision}>
            <BinIcon />
          </Icon>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  pickers: {
    gap: 16,
  },
  iconContainer: {
    paddingTop: 48,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  tabs: {
    flexDirection: "row",
    height: 48,
  },
  tab: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  tabLeft: {
    width: 71,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  tabRight: {
    width: 48,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: Colors.light.darkWhite,
    borderLeftWidth: 0,
  },
  label: {
    width: 80,
    textAlign: "center",
    color: Colors.light.placeholder,
  },
});

export default React.memo(ProvisionsContainer);
