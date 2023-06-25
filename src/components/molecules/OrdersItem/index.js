import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";
import MiIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function OrdersItem({name, desc}) {
  return (
    <View style={styles.container}>
      <MiIcon
        name={"text-box"}
        size={70}
        color={colors.secondary}
        style={styles.icon}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
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
  icon: {
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
