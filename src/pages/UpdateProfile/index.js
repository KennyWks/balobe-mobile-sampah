import {StyleSheet, View, ScrollView} from "react-native";
import React, {useState} from "react";
import {
  Header,
  Input,
  Button,
  Gap,
  Dropdown,
  DatePicker,
  Profile,
} from "../../components";
import {colors} from "../../utils";
import {IconRemove} from "../../assets";

export default function UpdateProfile({navigation}) {
  const [gender, setGender] = useState([
    {label: "Laki-laki", value: "Laki-laki"},
    {label: "Perempuan", value: "Perempuan"},
  ]);

  return (
    <View style={styles.page}>
      <Header navigation={navigation} title="Ubah Profil" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContent}>
          <View style={styles.wrapperProfile}>
            <Profile />
            <IconRemove style={styles.removeIcon} />
          </View>
        </View>
        <View style={styles.formContent}>
          <Input
            isPassword={false}
            type="inputtext"
            keyboardType="default"
            label="Nama"
          />
          <Gap height={22} />
          <Dropdown
            label={"Jenis Kelamin"}
            data={gender}
            onValueChange={value => {}}
          />
          <Gap height={22} />
          <DatePicker label="Tanggal Lahir" onChoose={value => {}} />
          <Gap height={40} />
          <Input
            isPassword={false}
            type="inputtext"
            keyboardType="phone-pad"
            label="No. Ponsel"
          />
          <Gap height={24} />
          <Input
            isPassword={false}
            type="inputtext"
            keyboardType="email-address"
            label="Email"
          />
          <Gap height={24} />
          <Input
            isPassword={true}
            type="inputtext"
            keyboardType="default"
            label="Password"
          />
          <Gap height={24} />
          <Input
            isPassword={false}
            type="inputtext"
            keyboardType="default"
            label="Pekerjaan"
          />
          <Gap height={24} />
          <Input
            isPassword={false}
            type="textarea"
            keyboardType="default"
            label="Alamat"
          />
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
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  profileContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
  wrapperProfile: {
    width: 130,
    height: 130,
  },
  removeIcon: {
    position: "absolute",
    right: 8,
    bottom: 8,
  },
  formContent: {
    padding: 40,
    paddingTop: 0,
  },
});
