import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";

export default function ChatsItem({user, name, dec}) {
  return (
    <View style={styles.container}>
      <Image source={user} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{dec}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomColor: colors.border,
    borderBottomColor: 1,
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 13,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
