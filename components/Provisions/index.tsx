import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import ProvisionsContainer from "../ProvisionsContainer";

export default function Provisions() {
  const [provisions, setProvisions] = React.useState([0]);

  const provisionsLength = provisions.length;

  function handleAddProvision() {
    setProvisions([...provisions, provisionsLength]);
  }

  React.useEffect(() => {
    console.log("provisions", provisions);
  }, [provisions]);

  function renderProvisions() {
    return provisions.map((provision) => (
      <ProvisionsContainer key={`ProvisionsContainer_${provision}`} />
    ));
  }

  return (
    <View>
      {renderProvisions()}

      <Text onPress={handleAddProvision} style={styles.addProvision}>
        + Ajouter une prestation à la suite
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
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
