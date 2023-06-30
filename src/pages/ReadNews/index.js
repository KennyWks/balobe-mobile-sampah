import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {IMGetStarted} from "../../assets";
import {colors, fonts} from "../../utils";
import {ScrollView} from "react-native-gesture-handler";

export default function ReadNews() {
  return (
    <View style={styles.container}>
      <Image source={IMGetStarted} style={styles.imageBackground} />
      <ScrollView>
        <View style={styles.wrapperTitle}>
          <Text style={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
        <View style={styles.wrapperDesc}>
          <Text style={styles.desc}>
            Harum ipsum praesentium quisquam? Quia eius a quas numquam est eos
            dolorum nesciunt consectetur voluptates quos voluptatum, veritatis
            in ab eaque error!adNews
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  imageBackground: {
    maxHeight: 240,
    maxWidth: 240,
    paddingTop: 20,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  wrapperDesc: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    margin: 10,
  },
});
