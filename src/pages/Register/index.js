import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Header, Input, Button, Gap, Dropdown} from "../../components";
import {colors} from "../../utils/colors";

const Register = ({navigation}) => {
  const [gender, setGender] = useState([
    {label: "Laki-laki", value: "Laki-laki"},
    {label: "Perempuan", value: "Perempuan"},
  ]);

  return (
    <View style={styles.page}>
      <Header title={"Daftar Akun Baru"} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input label="Nama Lengkap" />
          <Gap height={24} />
          <Input label="Tanggal Lahir" />
          <Dropdown label={"Jenis Kelamin"} data={gender} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Input label="Nomor HP" />
          <Gap height={24} />
          <Input label="Alamat" />
          <Gap height={24} />
          <View>
            <Button
              title="Upload Foto"
              onPress={() => {
                navigation.navigate("UploadPhoto");
              }}
            />
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
