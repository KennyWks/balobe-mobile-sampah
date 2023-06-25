import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";
import MiIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function PickupDropOff({icon, name, desc, onPress, color}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(color)}>
        <MiIcon name={icon} size={70} color={"black"} style={styles.icon} />
        <View style={styles.wrapperFeatures}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: color => ({
    flexDirection: "row",
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomColor: 1,
    alignItems: "center",
    backgroundColor: color,
    borderRadius: 10,
    marginBottom: 10,
  }),
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
  wrapperFeatures: {flexDirection: "column"},
});
