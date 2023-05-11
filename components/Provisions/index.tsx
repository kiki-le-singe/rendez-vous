import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";
import ProvisionsContainer from "../ProvisionsContainer";
import Card from "../Card";
import PlusIcon from "../../assets/svg/js/PlusIcon";

const Provisions = () => {
  const [provisions, setProvisions] = React.useState([Date.now()]);

  const provisionsLength = provisions.length;

  function handleAddProvision() {
    setProvisions([...provisions, Date.now()]);
  }

  function removeProvision(indexToRemove: number) {
    if (provisionsLength > 1) {
      const newArray = [...provisions];
      newArray.splice(indexToRemove, 1);
      setProvisions(newArray);
    }
  }

  function renderProvisions() {
    return provisions.map((provision, index) => (
      <Card>
        <ProvisionsContainer
          key={`ProvisionsContainer_${provision}`}
          index={index}
          provisionsLength={provisionsLength}
          removeProvision={removeProvision}
        />
      </Card>
    ));
  }

  return (
    <View style={styles.container}>
      {renderProvisions()}

      <TouchableOpacity
        onPress={handleAddProvision}
        style={styles.addProvisionContainer}
      >
        <PlusIcon />
        <Text style={styles.addText}>Ajouter une prestation à la suite</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  addProvisionContainer: {
    gap: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    borderStyle: "dashed",
  },
  addText: {
    color: Colors.light.lightGreen,
    fontSize: 13,
    fontWeight: "600",
  },
});

export default React.memo(Provisions);
