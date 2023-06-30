import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Button, Gap} from "../../atoms";
import {colors, fonts} from "../../../utils";
import DarkProfile from "./DarkProfile";

export default function Header({navigation, title, type}) {
  if (type === "profile") {
    return <DarkProfile name={title} navigation={navigation} />;
  }
  return (
    <View style={styles.container}>
      <Button
        type="icon-only"
        icon="back-dark"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
  },
  text: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
