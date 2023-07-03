import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput} from "react-native";
import {colors, fonts} from "../../../utils";

const Input = ({
  label,
  type,
  isPassword,
  keyboardType,
  value,
  onChangeText,
}) => {
  const [border, setBorder] = useState(colors.border);

  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };

  const onBlurForm = () => {
    setBorder(colors.border);
  };

  const InputComponent = () => {
    if (type === "textarea") {
      return (
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          secureTextEntry={isPassword}
          multiline
          numberOfLines={6}
          style={styles.input(border)}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
      );
    } else {
      return (
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          secureTextEntry={isPassword}
          style={styles.input(border)}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
      );
    }
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <InputComponent />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
