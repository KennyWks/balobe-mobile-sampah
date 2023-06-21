import {StyleSheet, Text, View} from "react-native";
import React from "react";
import HomeProfile from "../../components/molecules/HomeProfile";

export default function Home() {
  return (
    <View style={styles.container}>
      <HomeProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
