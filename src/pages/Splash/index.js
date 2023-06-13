import React, {useEffect} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {IMLogoBalobe} from "../../assets";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("GetStarted");
    }, 500);
  }, [navigation]);

  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImg}
        source={IMLogoBalobe}
        resizeMode="contain"
      />
      <Text style={styles.textLogo}>BALOBE</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logoImg: {
    width: "70%",
    height: 130,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textLogo: {
    color: "#007bff",
    fontSize: 40,
    fontFamily: "Nunito-SemiBold",
  },
});
