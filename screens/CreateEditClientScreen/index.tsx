import React from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View as RNView,
} from "react-native";

import { View, useThemeColor } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { CreateEditClientScreenProps } from "../../routes/types";
import DownArrowIcon from "../../assets/svg/js/DownArrowIcon";
import FlagIcon from "../../assets/svg/js/FlagIcon";
import Tabs from "../../components/Tabs";
import Card from "../../components/Card";
import GenderIcon from "../../assets/svg/js/GenderIcon";
import BdayIcon from "../../assets/svg/js/Bday";
import { TabMode } from "../../components/Tabs/types";
import Button from "../../components/Button";

export default function CreateEditClientScreen({
  route,
  navigation,
}: CreateEditClientScreenProps) {
  const { screenMode } = route.params;
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isSMSEnabled, setIsSMSEnabled] = React.useState(false);
  const [isMarketingEnabled, setIsMarketingEnabled] = React.useState(false);

  function toggleSMSSwitch() {
    setIsSMSEnabled(!isSMSEnabled);
  }
  function toggleMarketingSwitch() {
    setIsMarketingEnabled(!isMarketingEnabled);
  }

  const backgroundColor = useThemeColor(
    { light: Colors.light.white, dark: Colors.dark.darkGreen },
    "text"
  );
  const borderColor = useThemeColor(
    { light: Colors.light.border, dark: Colors.dark.border },
    "text"
  );
  const color = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text"
  );
  const fontSize = email ? 13 : 12;
  const themeStyles = { backgroundColor, borderColor, color, fontSize };

  React.useEffect(() => {
    console.log("screenMode", screenMode);
  }, []);

  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <View style={styles.buttonContainer}>
        <Button theme="green" label="Save" />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TextInput
          style={[styles.input, themeStyles]}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor={Colors.light.placeholder}
          keyboardType="email-address"
          autoCorrect={false}
        />
        <View>
          <View style={styles.iconsContainer}>
            <FlagIcon />
            <DownArrowIcon />
          </View>

          <TextInput
            style={[styles.input, themeStyles, styles.inputPhone]}
            onChangeText={setPhone}
            value={phone}
            placeholder="Téléphone"
            placeholderTextColor={Colors.light.placeholder}
            keyboardType="numeric"
            autoCorrect={false}
          />
        </View>

        <Card>
          <Tabs icon={<GenderIcon />} labels={["Homme", "Femme", "Enfant"]} />
        </Card>
        <Card>
          <Tabs
            icon={<BdayIcon />}
            labels={[20, "Sept"]}
            mode={TabMode.BUTTON}
          />
        </Card>
        <Card stylesContainer={styles.switchContainer}>
          <RNView style={styles.switchContent}>
            <Switch
              style={styles.switch}
              trackColor={{ false: "red", true: Colors.light.green }}
              thumbColor={Colors.light.white}
              onValueChange={toggleSMSSwitch}
              value={isSMSEnabled}
            />
            <Text style={styles.switchLabel}>SMS de rappel</Text>
          </RNView>
          <RNView style={styles.switchContent}>
            <Switch
              style={styles.switch}
              trackColor={{ false: "#BFC5C3", true: Colors.light.green }}
              thumbColor={Colors.light.white}
              onValueChange={toggleMarketingSwitch}
              value={isMarketingEnabled}
            />
            <Text style={styles.switchLabel}>SMS marketing</Text>
          </RNView>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 16,
  },
  contentContainerStyle: {
    gap: 16,
  },
  input: {
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  inputPhone: {
    paddingLeft: 52,
  },
  iconsContainer: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "transparent",
    width: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    height: "100%",
    paddingLeft: 12,
  },
  buttonContainer: {
    alignSelf: "flex-end",
  },
  switchContainer: {
    flexDirection: "row",
    gap: 16,
  },
  switchContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // gap: 4,
  },
  switchLabel: {
    fontSize: 13,
    color: Colors.light.darkGreen,
  },
  switch: { transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] },
});
