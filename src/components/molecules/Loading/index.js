import React from "react";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {colors} from "../../../utils";

function Loading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.secondary} />
      <Text style={styles.loadingText}>Memproses</Text>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.loading,
    width: "100%",
    height: "100%",
  },
  loadingText: {
    fontSize: 18,
    color: colors.secondary,
  },
});
