import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {IMLogoBalobe} from "../../assets";
import {Input, Link, Button, Gap} from "../../components";

const Login = () => {
  return (
    <View style={styles.page}>
      <Image source={IMLogoBalobe} />
      <Text style={styles.title}>Masuk dan mulai menjual sampah anda.</Text>
      <Input label="Alamat Email" />
      <Gap height={24} />
      <Input label="Kata Sandi" />
      <Gap height={10} />
      <Link title="Lupa Kata Sandi?" size={12} align="left" />
      <Gap height={40} />
      <View>
        <Button
          title="Kirim"
          onPress={() => {
            alert("ok");
          }}
        />
      </View>
      <Gap height={30} />
      <Link title="Buat akun baru" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "white",
    flex: 1,
  },
  logoImg: {
    width: "70%",
    height: 130,
  },
  title: {
    fontSize: 20,
    fontFamily: "Nunito-SemiBold",
    color: "#112340",
    marginVertical: 40,
    maxWidth: 220,
  },
});
