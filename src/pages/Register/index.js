import React from "react";
import {StyleSheet, View} from "react-native";
import {Header, Input, Button, Gap} from "../../components";
import {colors} from "../../utils/colors";

const Register = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Input label="Nama Lengkap" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Alamat" />
        <Gap height={24} />
        <Input label="Nomor HP" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <View>
          <Button
            title="Kirim"
            onPress={() => {
              alert("ok");
            }}
          />
        </View>
      </View>
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
