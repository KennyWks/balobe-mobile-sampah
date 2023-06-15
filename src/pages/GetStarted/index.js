import React from "react";
import {StyleSheet, Text, View, Image, ImageBackground} from "react-native";
import {IMLogoBalobe, IMGetStarted} from "../../assets";
import {Button, Gap} from "../../components";
import {fonts} from "../../utils";

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={IMGetStarted} style={styles.page}>
      <View>
        <Image source={IMLogoBalobe} />
        <Text style={styles.title}>
          Bersama Kita Menjaga Lingkungan Demi Masa Depan Bumi.
        </Text>
      </View>
      <View>
        <Button
          title="Masuk"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <Gap height={10} />
        <Button
          title="Daftar"
          type="secondary"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "black",
    marginTop: 71,
    fontFamily: fonts.primary[600],
  },
});
