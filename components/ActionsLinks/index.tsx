import { StyleSheet, View } from "react-native";

import { ActionsLinksProps } from "./types";

export default function ActionsLinks({ children }: ActionsLinksProps) {
  return <View style={styles.actionsLink}>{children}</View>;
}

const styles = StyleSheet.create({
  actionsLink: {
    flexDirection: "row",
    gap: 18,
  },
});
