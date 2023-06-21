import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {ILPlant} from "../../../assets/images";
import {colors, fonts} from "../../../utils";

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image source={ILPlant} style={styles.avatar} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>Pagi, Kenny</Text>
        <Text style={styles.info}>Ayo Daur Ulang Sampah...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 12,
  },
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  info: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
