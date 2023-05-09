import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../../constants/Colors";
import InfosIcon from "../../assets/svg/js/InfosIcon";
import UnderlineText from "../UnderlineText";

export default function ClientInfos() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function onPress() {
    setIsExpanded(!isExpanded);
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {!isExpanded ? <UnderlineText icon={<InfosIcon />} /> : <InfosIcon />}

      {isExpanded && (
        <View style={styles.boxInfos}>
          <Text style={[styles.title, styles.titleExpanded]}>Info Client</Text>
          <Text style={styles.infosText}>
            Quam inposita tranquillis pleraeque sunt primigenia eis quae
            institutores ad.
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 13,
    textDecorationLine: "underline",
  },
  titleExpanded: {
    fontSize: 13,
    textDecorationLine: "none",
    color: Colors.light.placeholder,
  },
  infosText: {
    fontSize: 13,
    color: Colors.light.darkGreen,
  },
  boxInfos: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    borderColor: Colors.light.border,
    gap: 2,
  },
});
