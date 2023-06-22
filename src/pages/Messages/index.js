import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {ListChat} from "../../components";
import {colors, fonts} from "../../utils";
import {
  UserProfile1,
  UserProfile2,
  UserProfile3,
  UserProfile4,
} from "../../assets";

export default function Messages() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Daftar chat</Text>
        <ListChat user={UserProfile1} />
        <ListChat user={UserProfile2} />
        <ListChat user={UserProfile3} />
        <ListChat user={UserProfile4} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
    marginLeft: 16,
  },
});
