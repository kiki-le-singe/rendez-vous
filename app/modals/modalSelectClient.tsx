import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useRecoilValue } from "recoil";

import { View, Text } from "../../components/Themed";
import ClientInput from "../../components/ClientInput";
import Card from "../../components/Card";

import { clientState } from "../../atoms/Clients";
import { Client } from "../../atoms/Clients/types";
import Colors from "../../constants/Colors";

export default function ModalSelectClientScreen() {
  const { data } = useRecoilValue(clientState);

  function handlePress(item: Client) {
    alert(`Selected Client ${item.email}`);
  }

  function renderItem({ item }: { item: Client }) {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Card stylesContainer={styles.cardContainer}>
          <Text lightColor={Colors.light.text} darkColor={Colors.dark.text}>
            {item.firstName} {item.lastName}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <ClientInput />
      </View>

      <FlashList data={data} renderItem={renderItem} estimatedItemSize={59} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 12,
  },
  inputContainer: {
    paddingBottom: 20,
  },
  cardContainer: {
    marginBottom: 16,
  },
});
