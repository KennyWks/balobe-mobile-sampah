import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {IconBackDark} from "../../../assets";
import {Gap} from "../../atoms";
import {colors} from "../../../utils/colors";

export default function index() {
  return (
    <View style={styles.container}>
      <IconBackDark style={styles.iconBackDark} />
      <Text style={styles.text}>Header</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  iconBackDark: {
    width: "10",
    height: "10",
  },
  text: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    fontFamily: "Nunito-SemiBold",
    color: colors.text.primary,
  },
});
