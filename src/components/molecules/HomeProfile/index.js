import {StyleSheet, Text, View, Image} from "react-native";
import React, {useState, useEffect} from "react";
import {ILPlant} from "../../../assets/images";
import {colors, fonts} from "../../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

export default function HomeProfile() {
  const [data, setData] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const decodeToken = jwtDecode(token);
      setData(decodeToken);
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <Image source={ILPlant} style={styles.avatar} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>Hallo..! {data.name}</Text>
        <Text style={styles.info}>Ayo Daur Ulang Sampah...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 12,
  },
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  info: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
