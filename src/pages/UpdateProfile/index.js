import {StyleSheet, View, ScrollView} from "react-native";
import React, {useState, useEffect} from "react";
import {
  Header,
  Input,
  Button,
  Gap,
  Dropdown,
  DatePicker,
  Profile,
} from "../../components";
import {
  colors,
  getLocalData,
  removeLocalData,
  storeLocalData,
  useForm,
} from "../../utils";
import {IconRemove} from "../../assets";

export default function UpdateProfile({navigation}) {
  const [gender, setGender] = useState([
    {label: "Laki-laki", value: "Laki-laki"},
    {label: "Perempuan", value: "Perempuan"},
  ]);
  const [data, setData] = useState(false);

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
            setData(res);
          } else {
            logOut(
              navigation,
              "Account",
              "Sesi login anda berakhir. Silahkan login ulang!",
            );
          }
        }
      },
      err => {
        logOut(
          navigation,
          "Account",
          "Sesi login anda berakhir. Silahkan login ulang!",
        );
      },
    );
  };

  const [form, setForm] = useForm({
    user_id: data.user_id,
    name: "",
    jk: "",
    tglLahir: "",
    noHP: "",
    email: "",
    password: "",
    pekerjaan: "",
  });

  const uploadPhoto = async () => {
    setLoading(true);
    try {
      const result = await postApiData("/user/createorupdate");
      await postApiData("/user/signout");
      const user = await postApiData("/sigin", {
        email: data.email,
        password: data.password,
      });
      setLoading(false);
      if (result.data.success) {
        removeLocalData("token");
        storeLocalData("token", user.data.token);
        navigation.navigate("UploadPhoto");
      } else {
        showMessage({
          message: result.data.message,
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
            onChangeText={value => setForm("noHP", value)}
            isPassword={false}
            type="inputtext"
            keyboardType="phone-pad"
            label="No. Ponsel"
          />
          <Gap height={24} />
          <Input
            onChangeText={value => setForm("email", value)}
            isPassword={false}
            type="inputtext"
            keyboardType="email-address"
            label="Email"
          />
          <Gap height={24} />
          <Input
            onChangeText={value => setForm("password", value)}
            isPassword={true}
            type="inputtext"
            keyboardType="default"
            label="Password"
          />
          <Gap height={24} />
          <Input
            onChangeText={value => setForm("pekerjaan", value)}
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
            <Button title="Upload Foto" onPress={uploadPhoto} />
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
