import React from "react";
import {View, StyleSheet, Text, TextInput} from "react-native";
import {colors, fonts} from "../../../utils";

const Input = ({label, type, isPassword, keyboardType}) => {
  const InputComponent = () => {
    if (type === "textarea") {
      return (
        <TextInput
          secureTextEntry={isPassword}
          multiline
          numberOfLines={6}
          style={styles.input}
          keyboardType={keyboardType}
        />
      );
    } else {
      return (
        <TextInput
          secureTextEntry={isPassword}
          style={styles.input}
          keyboardType={keyboardType}
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
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
