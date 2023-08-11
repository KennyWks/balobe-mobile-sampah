import {StyleSheet, View, ScrollView} from "react-native";
import React, {useState, useEffect} from "react";
import {
  Loading,
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
  logOut,
} from "../../utils";
import {IconRemove} from "../../assets";
import {showMessage} from "react-native-flash-message";
import {postApiData, postApiDataWithoutHeader} from "../../helpers/CRUD";

export default function UpdateProfile({navigation}) {
  const [gender, setGender] = useState([
    {label: "Laki-laki", value: "Laki-laki"},
    {label: "Perempuan", value: "Perempuan"},
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const res = await getLocalData("token");
      if (res !== null) {
        const dateNow = new Date();
        if (res.exp < dateNow.getTime()) {
          console.log(res);
          setForm("user_id", res.user_id);
          setForm("name", res.name);
          setForm("jk", res.jk);
          setForm("tglLahir", res.tgl_lahir);
          setForm("noHP", res.no_hp);
          setForm("email", res.email);
          setForm("pekerjaan", res.pekerjaan);
        } else {
          logOut(
            navigation,
            "UpdateProfile",
            "Sesi login anda berakhir. Silahkan login ulang!",
          );
        }
      }
    } catch (error) {
      logOut(
        navigation,
        "UpdateProfile",
        "Sesi login anda berakhir. Silahkan login ulang!",
      );
    }
  };

  const [form, setForm] = useForm({
    user_id: "",
    name: "",
    jk: "",
    tglLahir: "",
    noHP: "",
    email: "",
    password: "",
    pekerjaan: "",
    alamat: "",
  });

  const uploadPhoto = async () => {
    setLoading(true);
    try {
      const result = await postApiData("/user/createorupdate", form);
      if (result.data.success) {
        await postApiData("/user/signout");
        const user = await postApiDataWithoutHeader("/signin", {
          email: data.email,
          password: data.password,
        });
        removeLocalData("token");
        storeLocalData("token", user.data.token);
        setLoading(false);
        navigation.navigate("UploadPhoto");
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
              value={form.name}
              keyboardType="default"
              label="Nama"
            />
            <Gap height={22} />
            <Dropdown
              label={"Jenis Kelamin"}
              data={gender}
              value={form.jk}
              onValueChange={value => {
                setForm("jk", value);
              }}
            />
            <Gap height={22} />
            <DatePicker
              label="Tanggal Lahir"
              value={form.tglLahir}
              onChoose={value => {
                setForm("tglLahir", value);
              }}
            />
            <Gap height={40} />
            <Input
              onChangeText={value => setForm("noHP", value)}
              isPassword={false}
              type="inputtext"
              value={form.noHP}
              keyboardType="phone-pad"
              label="No. Ponsel"
            />
            <Gap height={24} />
            <Input
              onChangeText={value => setForm("email", value)}
              isPassword={false}
              type="inputtext"
              value={form.email}
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
              value={form.pekerjaan}
              type="inputtext"
              keyboardType="default"
              label="Pekerjaan"
            />
            <Gap height={24} />
            <Input
              isPassword={false}
              type="textarea"
              value={form.alamat}
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
      {loading && <Loading />}
    </>
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
