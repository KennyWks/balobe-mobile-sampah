import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";
import {UserProfile1} from "../../../assets";
import {Button} from "../../atoms";

export default function DarkProfile({navigation, name}) {
  return (
    <View style={styles.container}>
      <Button
        type="icon-only"
        icon="back-light"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Image source={UserProfile1} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: "center",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
