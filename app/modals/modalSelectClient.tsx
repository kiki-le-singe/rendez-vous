import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useRecoilValue } from "recoil";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { View, Text, useThemeColor } from "../../components/Themed";
import ClientInput from "../../components/ClientInput";
import Card from "../../components/Card";

import { clientState, getFilteredClients } from "../../atoms/Clients";
import { Client } from "../../atoms/Clients/types";
import Colors from "../../constants/Colors";
import Button from "../../components/Button";

export default function ModalSelectClientScreen() {
  const data = useRecoilValue(clientState);
  const [clients, setClients] = React.useState<Client[]>([]);
  const [isCreateMode, setIsCreateMode] = React.useState(false);
  const borderColor = useThemeColor(
    { light: Colors.light.border, dark: Colors.dark.border },
    "text"
  );

  const dataLength = data.length;

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);
  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 400 }),
      transform: [{ scale: withTiming(scale.value, { duration: 400 }) }],
    };
  });

  const buttonProps = isCreateMode
    ? {
        rightElement: (
          <Button
            label="Créer"
            theme="green"
            onPress={() => alert("Créer")}
            animatedStyle={buttonStyle}
          />
        ),
      }
    : {};

  function handlePress(item: Client) {
    alert(`Selected Client ${item.email}`);
  }

  function handleChangeText(searchString: string) {
    if (searchString) {
      const result = getFilteredClients(data, searchString);
      setClients(result);

      !result.length ? setIsCreateMode(true) : setIsCreateMode(false);
    } else {
      setClients(data);
    }
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

  React.useEffect(() => {
    if (dataLength) {
      setClients(data);
    }
  }, [dataLength, data]);

  // Start animation when the component is mounted
  React.useEffect(() => {
    if (isCreateMode) {
      opacity.value = 1;
      scale.value = 1;
    } else {
      opacity.value = 0;
      scale.value = 0;
    }
  }, [isCreateMode, opacity, scale]);

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { borderColor }]}>
        <View style={styles.inputContent}>
          <ClientInput onChangeText={handleChangeText} {...buttonProps} />
        </View>
      </View>

      <FlashList
        data={clients}
        renderItem={renderItem}
        estimatedItemSize={59}
        contentContainerStyle={styles.contentContainerStyle}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  inputContainer: {
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  inputContent: {
    paddingHorizontal: 12,
  },
  cardContainer: {
    marginBottom: 16,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingHorizontal: 12,
  },
});
