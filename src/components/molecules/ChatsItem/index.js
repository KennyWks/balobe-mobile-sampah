import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";
import MiIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ChatsItem({user, name, dec, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrappContainer}>
        <View style={styles.container}>
          <Image source={user} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>{dec}</Text>
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
    paddingHorizontal: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
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
