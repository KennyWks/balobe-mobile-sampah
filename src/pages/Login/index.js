import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {ILogoBalobe} from "../../assets";
import {Button, Input} from "../../components";

const Login = () => {
  return (
    <View>
      <Image style={styles.logoImg} source={ILogoBalobe} resizeMode="contain" />
      <Input />
      <Button />
      <Text>Page Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoImg: {
    width: "70%",
    height: 130,
  },
});
