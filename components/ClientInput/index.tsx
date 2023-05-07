import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";

import Colors from "../../constants/Colors";
import { useThemeColor } from "../Themed";
import { ClientInputProps } from "./types";
import ClientIcon from "../../assets/svg/js/ClientIcon";
import InputContainer from "../InputContainer";

export default function ClientInput({
  editable = true,
  onChangeText,
  rightElement = null,
}: ClientInputProps) {
  const [_text, _onChangeText] = React.useState("");
  const navigation = useNavigation();

  function handleChangeText(text: string) {
    onChangeText && onChangeText(text);
    _onChangeText(text);
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
  const fontSize = _text ? 13 : 12;

  function handlePress() {
    // @TODO: find a better way to fix this TS error
    // @See: https://stackoverflow.com/questions/68667766/react-native-typescript-string-is-not-assignable-to-parameter-of-type-never
    navigation.navigate("modals/modalSelectClient" as never);
  }

  function renderTextInput() {
    const textInput = (
      <InputContainer>
        <ClientIcon />
        <TextInput
          style={[
            styles.input,
            { backgroundColor, borderColor, color, fontSize },
          ]}
          onChangeText={handleChangeText}
          value={_text}
          placeholder="Choisir un client"
          placeholderTextColor={Colors.light.placeholder}
          autoCorrect={false}
          editable={editable}
          pointerEvents={editable ? undefined : "none"}
        />
        {rightElement}
      </InputContainer>
    );

    if (editable) {
      return textInput;
    } else {
      return (
        <TouchableOpacity onPress={handlePress}>{textInput}</TouchableOpacity>
      );
    }
  }

  return renderTextInput();
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
});
