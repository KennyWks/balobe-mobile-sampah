import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function ListBullet({unicode, label}) {
  return (
    <View>
      <View style={styles.wrapperList}>
        <Text>{unicode} </Text>
        <Text>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
