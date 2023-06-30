import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {ChatItem, Header, InputChat} from "../../components";
import {colors, fonts} from "../../utils";

export default function Chatting({navigation, route}) {
  const {id, name} = route.params;
  return (
    <View>
      <Header type="profile" title={name} navigation={navigation} />
      <Text style={styles.chatDate}>Senin, 12 April 2022</Text>
      <ChatItem />
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: "center",
  },
});
