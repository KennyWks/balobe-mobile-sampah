import {StyleSheet, View, ScrollView, Text} from "react-native";
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

  const [user_id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [jk, setJK] = useState("");
  const [tgl_lahir, setTglLahir] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    setLoading(true);
    try {
      const res = await getLocalData("token");
      if (res !== null) {
        const dateNow = new Date();
        if (res.exp < dateNow.getTime()) {
          setUserId(res.user_id);
          setName(res.name);
          setJK(res.jk);
          setTglLahir(res.tgl_lahir);
          setNoHp(res.no_hp);
          setEmail(res.email);
          setPekerjaan(res.pekerjaan);
          setAlamat(res.alamat);
          setLoading(false);
        } else {
          setLoading(false);
          logOut(
            navigation,
            "UpdateProfile",
            "Sesi login anda berakhir. Silahkan login ulang!",
          );
        }
      }
    } catch (error) {
      setLoading(false);
      logOut(
        navigation,
        "UpdateProfile",
        "Sesi login anda berakhir. Silahkan login ulang!",
      );
    }
  };

  const uploadPhoto = async () => {
    setLoading(true);
    try {
      const result = await postApiData("/user/createorupdate", {
        user_id: user_id,
        name: name,
        jk: jk,
        tgl_lahir: tgl_lahir,
        no_hp: no_hp,
        email: email,
        password: password,
        pekerjaan: pekerjaan,
      });
      if (result.data.success) {
        await postApiData("/user/signout");
        const user = await postApiDataWithoutHeader("/signin", {
          email: email,
          password: password,
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
            <Text style={{color: "red", fontSize: 13, marginVertical: 10}}>
              * Wajib diisi
            </Text>
            <Input
              label="Email*"
              isPassword={false}
              type="inputtext"
              keyboardType="email-address"
              onChangeText={value => setEmail(value)}
              value={email}
            />
            <Gap height={24} />
            <Input
              label="Password*"
              isPassword={true}
              type="inputtext"
              keyboardType="default"
              onChangeText={value => setPassword(value)}
            />
            <Gap height={24} />
            <Input
              label="Nama"
              isPassword={false}
              type="inputtext"
              keyboardType="default"
              onChangeText={value => setName(value)}
              value={name}
            />
            <Gap height={22} />
            <Dropdown
              label={"Jenis Kelamin"}
              data={gender}
              onValueChange={value => {
                setJK(value);
              }}
              value={jk}
            />
            <Gap height={22} />
            <DatePicker
              label="Tanggal Lahir"
              onChoose={value => {
                setTglLahir(value);
              }}
              value={tgl_lahir != "" ? tgl_lahir : new Date()}
            />
            <Gap height={40} />
            <Input
              label="No. Ponsel"
              isPassword={false}
              type="inputtext"
              keyboardType="phone-pad"
              onChangeText={value => setNoHp(value)}
              value={no_hp}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              isPassword={false}
              type="inputtext"
              keyboardType="default"
              onChangeText={value => setPekerjaan(value)}
              value={pekerjaan}
            />
            <Gap height={24} />
            <Input
              label="Alamat"
              isPassword={false}
              type="textarea"
              keyboardType="default"
              onChangeText={value => setAlamat(value)}
              value={alamat}
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
