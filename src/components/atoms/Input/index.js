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

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        secureTextEntry={isPassword}
        multiline={type === "textarea" ? true : false}
        // numberOfLines={6}
        style={styles.input(border)}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
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
    color: colors.black,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
