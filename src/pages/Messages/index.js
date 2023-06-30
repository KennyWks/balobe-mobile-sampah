import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import {ChatsItem} from "../../components";
import {colors, fonts} from "../../utils";
import {
  UserProfile1,
  UserProfile2,
  UserProfile3,
  UserProfile4,
} from "../../assets";

export default function Messages({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Daftar Pengguna</Text>
          <ChatsItem
            name="Budi"
            dec="Hallo, barang sudah diproses"
            user={UserProfile1}
            onPress={() => {
              navigation.navigate({
                name: "Chatting",
                params: {
                  id: 1,
                  name: "Budi",
                },
              });
            }}
          />
          <ChatsItem
            name="Rudi"
            dec="Bt sudah di lokasi"
            user={UserProfile2}
            onPress={() => {
              navigation.navigate({
                name: "Chatting",
                params: {
                  id: 2,
                  name: "Rudi",
                },
              });
            }}
          />
          <ChatsItem
            name="Rini"
            dec="Salah hitung bro"
            user={UserProfile3}
            onPress={() => {
              navigation.navigate({
                name: "Chatting",
                params: {
                  id: 3,
                  name: "Rini",
                },
              });
            }}
          />
          <ChatsItem
            name="Ani"
            dec="Su sampe ko?"
            user={UserProfile4}
            onPress={() => {
              navigation.navigate({
                name: "Chatting",
                params: {
                  id: 2,
                  name: "Ani",
                },
              });
            }}
          />
        </ScrollView>
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
