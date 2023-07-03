import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {IMLogoBalobe} from "../../assets";
import {Input, Link, Button, Gap} from "../../components";
import {colors, fonts, useForm} from "../../utils";

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    console.log(form);
    setForm("reset");
    // navigation.replace("MainApp");
  };

  return (
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
