import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Image, Alert} from "react-native";
import {IMLogoBalobe} from "../../assets";
import {Input, Link, Button, Gap, Loading} from "../../components";
import {colors, fonts, useForm} from "../../utils";
import {postData} from "../../helpers/CRUD";
import {showMessage} from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (e) {
      Alert.alert("Tidak dapat memproses sesi login ini!");
    }
  };

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const decodeToken = jwtDecode(token);
      const dateNow = new Date();
      if (value !== null && decodeToken.exp < dateNow.getTime()) {
        navigation.replace("MainApp");
      }
    } catch (e) {
      Alert.alert("Sesi login anda sudah habis. Silahkan login ulang!");
    }
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      const result = await postData("/signin", form);
      setLoading(false);
      if (result.data.success) {
        setForm("reset");
        showMessage({
          message: "Berhasil Login",
          type: "success",
        });
        storeData(result.data.token);
        console.log(result.data.token);
        setTimeout(() => {
          navigation.replace("MainApp");
        }, 500);
      } else {
        if (result.data.error.email) {
          showMessage({
            message: result.data.error.email,
            type: "danger",
          });
        }

        if (result.data.error.password) {
          setTimeout(() => {
            showMessage({
              message: result.data.error.password,
              type: "danger",
            });
          }, 900);
        }
      }
    } catch (error) {
      setLoading(false);
      showMessage({
        message: "Gagal Login!",
        type: "danger",
      });
    }
  };

  return (
    <>
      <View style={styles.page}>
        <Image source={IMLogoBalobe} />
        <Text style={styles.title}>Masuk dan mulai menjual sampah anda.</Text>
        <Input
          value={form.email}
          onChangeText={value => setForm("email", value)}
          isPassword={false}
          type="inputtext"
          keyboardType="default"
          label="Alamat Email"
        />
        <Gap height={24} />
        <Input
          value={form.password}
          onChangeText={value => setForm("password", value)}
          isPassword={true}
          type="inputtext"
          keyboardType="default"
          label="Kata Sandi"
        />
        <Gap height={10} />
        <Link title="Lupa Kata Sandi?" size={12} align="left" />
        <Gap height={40} />
        <View>
          <Button title="Kirim" onPress={onSubmit} />
        </View>
        <Gap height={30} />
        <Link
          title="Buat akun baru"
          size={16}
          align="center"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  logoImg: {
    width: "70%",
    height: 130,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: "#112340",
    marginVertical: 40,
    maxWidth: 220,
  },
});
