import {ScrollView, StyleSheet, Text, View, Image} from "react-native";
import React, {useState, useEffect} from "react";
import {Loading, MenuProfile, Profile} from "../../components";
import {colors, getLocalData, logOut} from "../../utils";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {postApiData} from "../../helpers/CRUD";
import {showMessage} from "react-native-flash-message";

export default function Account({navigation}) {
  const point = 0;
  const tabBarHeight = useBottomTabBarHeight();
  const [loading, setLoading] = useState(false);
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

  const onSubmit = async () => {
    setLoading(true);
    try {
      const result = await postApiData("/signout");
      setLoading(false);
      if (result.data.success) {
        logOut("token", "Account", result.data.message);
      } else {
        showMessage({
          message: result.data.message,
          type: "danger",
        });
      }
    } catch (error) {
      setLoading(false);
      showMessage({
        message: "Gagal Logout!",
        type: "danger",
      });
    }
  };

  return (
    <>
      <View style={styles.container(tabBarHeight)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperProfile}>
            <Profile name={data.name} desc={`${point} Poin`} />
          </View>
          <MenuProfile
            icon="pencil-outline"
            name="Ubah Profil"
            appVersion=""
            onPress={() => {
              navigation.navigate("UpdateProfile");
            }}
          />
          <View style={styles.wrapperSubTitle}>
            <Text>Tentang</Text>
          </View>
          <MenuProfile
            icon="alert-circle-outline"
            name="Panduan"
            appVersion=""
          />
          <MenuProfile
            icon="text-box-check-outline"
            name="Syarat & Ketentuan"
            appVersion=""
          />
          <MenuProfile
            icon="shield-lock-outline"
            name="Kebijakan Privasi"
            appVersion=""
          />
          <MenuProfile
            icon="help-circle-outline"
            name="Pertanyaan Umum"
            appVersion=""
          />
          <View style={styles.wrapperSubTitle}>
            <Text>Lainnya</Text>
          </View>
          <MenuProfile icon="leaf" name="Versi Aplikasi" appVersion="1.0.0" />
          <MenuProfile
            icon="logout"
            name="Keluar"
            appVersion="logout"
            onPress={onSubmit}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: tabBarHeight => ({
    backgroundColor: colors.white,
    flex: 1,
    paddingBottom: tabBarHeight + 7,
  }),
  wrapperProfile: {
    backgroundColor: colors.greenLight,
    borderRadius: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  wrapperSubTitle: {backgroundColor: colors.blueLight, padding: 10},
});
