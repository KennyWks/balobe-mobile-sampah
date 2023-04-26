import React, {useEffect} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {ILogoBalobe} from "../../assets";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 500);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}>
      <Image style={styles.logoImg} source={ILogoBalobe} resizeMode="contain" />
      <Text
        style={{
          color: "#007bff",
          fontSize: 40,
          fontFamily: "Nunito-SemiBold",
        }}>
        BALOBE
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logoImg: {
    width: "70%",
    height: 130,
  },
});
