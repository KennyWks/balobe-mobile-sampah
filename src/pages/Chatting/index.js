import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {ChatItem, Header, InputChat} from "../../components";
import {colors, fonts} from "../../utils";

export default function Chatting({navigation, route}) {
  const {id, name} = route.params;
  return (
    <View style={styles.page}>
      <Header type="profile" title={name} navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 12 April 2022</Text>
        <ChatItem isMe message="Hallo, Barang su sampe ko?" time="4.30" />
        <ChatItem message="Hallo, Dalam perjalanan" time="4.35" />
      </View>
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: "center",
  },
});
