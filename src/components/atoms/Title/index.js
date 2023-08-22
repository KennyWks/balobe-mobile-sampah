import {StyleSheet, Text} from "react-native";
import React from "react";

export default function Title({label, fontSize, textAlign}) {
  return <Text style={styles.textStyles(fontSize, textAlign)}>{label}</Text>;
}

const styles = StyleSheet.create({
  textStyles: (fontSize, textAlign) => ({
    fontSize: fontSize,
    fontWeight: "bold",
    marginBottom: 7,
    textAlign: textAlign,
  }),
});
