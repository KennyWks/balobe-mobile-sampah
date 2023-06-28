import {StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";

export default function NewsItem({title, date, image}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={image} style={styles.image} />
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
    marginBottom: 5,
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
