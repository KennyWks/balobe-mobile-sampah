import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {colors} from "../../../utils/colors";

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(type)}>
        <Text style={styles.text(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === "secondary"
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color:
      type === "secondary"
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: "Nunito-SemiBold",
  }),
});
