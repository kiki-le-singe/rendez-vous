import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Colors from "../../constants/Colors";
import { CalendarProps } from "./types";
import CalendarIcon from "../../assets/svg/js/CalendarIcon";
import InputContainer from "../InputContainer";
import Tabs from "../Tabs";
import { TabMode } from "../Tabs/types";
import CheckBox from "../Checkbox";
import UnderlineText from "../UnderlineText";
import RepeatIcon from "../../assets/svg/js/RepeatIcon";

export default function Calendar({
  editable = true,
  onChangeText,
  textInputStyles = {},
}: CalendarProps) {
  const [_text, _onChangeText] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);

  function handleChangeText(text: string) {
    onChangeText && onChangeText(text);
    _onChangeText(text);
  }

  const fontSize = _text ? 13 : 12;

  function handleCheckBoxPress() {
    setIsChecked(!isChecked);
  }

  function renderStartEndPlanning() {
    return isChecked ? null : (
      <View style={styles.endAndStartPlanning}>
        <Text style={styles.text}>de</Text>

        <Tabs
          mode={TabMode.BUTTON}
          labels={[14, 30]}
          labelStyles={styles.label}
        />

        <Text style={styles.text}>à</Text>

        <Tabs
          mode={TabMode.BUTTON}
          labels={[15, 30]}
          labelStyles={styles.label}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <InputContainer>
        <CalendarIcon />
        <TextInput
          style={[styles.input, { fontSize }, textInputStyles]}
          onChangeText={handleChangeText}
          value={_text}
          placeholder="Lundi 21 mars"
          placeholderTextColor={Colors.light.placeholder}
          autoCorrect={false}
          editable={editable}
          pointerEvents={editable ? undefined : "none"}
        />
      </InputContainer>

      <View style={styles.planningContainer}>
        {renderStartEndPlanning()}

        <View style={styles.timeContainer}>
          {!isChecked && (
            <Text style={[styles.text, styles.textTime]}>(1h)</Text>
          )}
          <CheckBox
            label="Jour entier"
            isChecked={isChecked}
            onPress={handleCheckBoxPress}
          />
        </View>
      </View>

      <UnderlineText
        disabled={false}
        icon={<RepeatIcon />}
        text="Répéter"
        textColor={Colors.light.green}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    borderColor: Colors.light.border,
  },
  text: {
    color: Colors.light.lightGreen,
    fontSize: 13,
    fontWeight: "400",
  },
  timeContainer: {
    flexDirection: "row",
    gap: 18,
  },
  textTime: {
    color: Colors.light.darkGreen,
    fontWeight: "600",
  },
  planningContainer: {
    gap: 16,
    alignItems: "center",
    marginBottom: 10,
  },
  endAndStartPlanning: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  label: {
    width: 30,
  },
});
