import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {colors, fonts} from "../../../utils";
import BtnIconSend from "./BtnIconSend";
import IconOnly from "./IconOnly";

const Button = ({title, type, icon, disable, onPress}) => {
  if (type === "icon-only") {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (type === "btn-icon-send") {
    return <BtnIconSend icon={icon} disable={disable} onPress={onPress} />;
  }

  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
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
  disableBg: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: colors.button.disable.background,
  },
  disableText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: colors.button.disable.text,
  },
  text: type => ({
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color:
      type === "secondary"
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
  }),
  disableBg: {},
});
