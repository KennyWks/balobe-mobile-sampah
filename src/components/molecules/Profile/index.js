import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";

export default function Profile({name, desc, photo}) {
  return (
    <View>
      <View style={styles.borderProfilImage}>
        <Image source={photo} style={styles.avatar} />
        {name && (
          <View style={styles.textWrapper}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.point}>{desc}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boderProfilImage: {
    width: 130,
    height: 130,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  textWrapper: {justifyContent: "center", alignItems: "center"},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textTransform: "capitalize",
  },
  point: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
  },
});
