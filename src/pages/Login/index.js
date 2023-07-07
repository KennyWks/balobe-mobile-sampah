import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {IMLogoBalobe} from "../../assets";
import {Input, Link, Button, Gap, Loading} from "../../components";
import {
  colors,
  fonts,
  useForm,
  storeLocalData,
  getLocalData,
  logOut,
} from "../../utils";
import {postApiData} from "../../helpers/CRUD";
import {showMessage} from "react-native-flash-message";

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    getLocalData("token").then(
      res => {
        if (res !== null) {
          const {exp} = res;
          const dateNow = new Date();
          if (exp < dateNow.getTime()) {
            navigation.replace("MainApp");
          } else {
            logOut(
              navigation,
              "Login",
              "Sesi login anda berakhir. Silahkan login ulang!",
            );
          }
        }
      },
      err => {
        logOut(
          navigation,
          "Login",
          "Sesi login anda berakhir. Silahkan login ulang!",
        );
      },
    );
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      const result = await postApiData("/signin", form);
      setLoading(false);
      if (result.data.success) {
        setForm("reset");
        showMessage({
          message: "Berhasil Login",
          type: "success",
        });
        storeLocalData("token", result.data.token);
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
