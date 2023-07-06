import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";
import {url} from "../../../helpers/CRUD";

export default function NewsItem({title, date, image, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Image
          source={{
            uri: url + image,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
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
