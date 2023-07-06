import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {
  Header,
  Input,
  Button,
  Gap,
  Dropdown,
  DatePicker,
} from "../../components";
import {colors, useForm} from "../../utils";

const Register = ({navigation}) => {
  const [gender, setGender] = useState([
    {label: "Laki-laki", value: "Laki-laki"},
    {label: "Perempuan", value: "Perempuan"},
  ]);

  const [form, setForm] = useForm({
    name: "",
    jk: "",
    tglLahir: "",
    noHP: "",
    email: "",
    password: "",
    pekerjaan: "",
  });

  const onContinue = () => {
    setForm("reset");
    // navigation.navigate("UploadPhoto");
  };

  return (
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
              setForm("tglLahir", value);
            }}
          />
          <Gap height={40} />
          <Input
            value={form.noHP}
            onChangeText={value => setForm("noHP", value)}
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
            <Button title="Upload Foto" onPress={onContinue} />
          </View>
        </View>
      </ScrollView>
    </View>
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
    paddingTop: 0,
  },
});
