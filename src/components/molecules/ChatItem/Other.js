import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";
import {UserProfile1} from "../../../assets";

export default function Other({message, time}) {
  return (
    <View style={styles.container}>
      <Image source={UserProfile1} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{message}</Text>
          <Text style={styles.date}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "flex-end",
    paddingLeft: 16,
    flexDirection: "row",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
    flexDirection: "row",
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: "80%",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
