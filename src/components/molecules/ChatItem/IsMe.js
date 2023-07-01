import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";

export default function IsMe({message, time}) {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>{message}</Text>
        <Text style={styles.date}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "flex-end",
    paddingRight: 16,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.blueLight,
    maxWidth: "70%",
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
