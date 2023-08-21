import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {
  Header,
  Input,
  Button,
  Gap,
  Dropdown,
  DatePicker,
  Loading,
} from "../../components";
import {colors, useForm} from "../../utils";
import {postApiDataWithoutHeader} from "../../helpers/CRUD";
import {showMessage} from "react-native-flash-message";

const Register = ({navigation}) => {
  const [gender, setGender] = useState([
    {label: "Laki-laki", value: "Laki-laki"},
    {label: "Perempuan", value: "Perempuan"},
  ]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    user_id: "",
    name: "",
    jk: "",
    tgl_lahir: "",
    no_hp: "",
    email: "",
    password: "",
    pekerjaan: "",
  });

  const onSend = async () => {
    setLoading(true);
    try {
      const result = await postApiDataWithoutHeader("/user/create", form);
      if (result.data.success) {
        setForm("reset");
        setLoading(false);
        showMessage({
          message: "Data berhasil diproses!",
          type: "success",
        });
        navigation.navigate("Login");
      } else {
        setLoading(false);
        showMessage({
          message: "Data gagal diproses!",
          type: "danger",
        });
      }
    } catch (error) {
      setLoading(false);
      showMessage({
        message: "Gagal diproses!",
        type: "danger",
      });
    }
  };

  return (
    <>
      <View style={styles.page}>
        <Header
          type="default"
          title={"Daftar Akun Baru"}
          navigation={navigation}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              value={form.name}
              onChangeText={value => setForm("name", value)}
              isPassword={false}
              type="inputtext"
              keyboardType="default"
              label="Nama"
            />
            <Gap height={22} />
            <Dropdown
              label={"Jenis Kelamin"}
              data={gender}
              onValueChange={value => {
                setForm("jk", value);
              }}
            />
            <Gap height={22} />
            <DatePicker
              label="Tanggal Lahir"
              onChoose={value => {
                setForm("tgl_lahir", value);
              }}
              value={new Date()}
            />
            <Gap height={40} />
            <Input
              value={form.no_hp}
              onChangeText={value => setForm("no_hp", value)}
              isPassword={false}
              type="inputtext"
              keyboardType="phone-pad"
              label="No. Ponsel"
            />
            <Gap height={24} />
            <Input
              value={form.email}
              onChangeText={value => setForm("email", value)}
              isPassword={false}
              type="inputtext"
              keyboardType="email-address"
              label="Email"
            />
            <Gap height={24} />
            <Input
              value={form.password}
              onChangeText={value => setForm("password", value)}
              isPassword={true}
              type="inputtext"
              keyboardType="default"
              label="Password"
            />
            <Gap height={24} />
            <Input
              value={form.pekerjaan}
              onChangeText={value => setForm("pekerjaan", value)}
              isPassword={false}
              type="inputtext"
              keyboardType="default"
              label="Pekerjaan"
            />
            <Gap height={24} />
            <View>
              <Button title="Kirim" onPress={onSend} />
            </View>
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logoImg: {
    width: "70%",
    height: 130,
  },
  content: {
    padding: 40,
    paddingTop: 10,
  },
});
