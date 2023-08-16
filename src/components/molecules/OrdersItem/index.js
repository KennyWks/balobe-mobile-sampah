import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";
import MiIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function OrdersItem({judul, deskripsi, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrappContainer}>
        <View style={styles.container}>
          <MiIcon
            name={"text-box"}
            size={70}
            color={colors.secondary}
            style={styles.icon}
          />
          <View>
            <Text style={styles.name}>{judul}</Text>
            <Text style={styles.desc}>{deskripsi}</Text>
          </View>
        </View>
        <MiIcon
          name={"chevron-right"}
          size={30}
          color={colors.secondary}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrappContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
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
