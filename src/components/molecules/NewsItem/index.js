import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {UserProfile1} from "../../../assets";
import {colors, fonts} from "../../../utils";

export default function NewsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          iste perspiciatis veritatis qui!
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={UserProfile1} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: "90%",
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 4,
  },
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingBottom: 16,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
  titleWrapper: {
    flex: 1,
  },
});
