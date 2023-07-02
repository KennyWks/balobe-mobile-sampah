import {ScrollView, StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {MenuProfile, Profile} from "../../components";
import {colors, fonts} from "../../utils";

export default function Account({navigation}) {
  const point = 0;
  return (
    <View style={styles.container}>
      <View style={styles.wrapperProfile}>
        <Profile name="Kenny" desc={`${point} Poin`} />
      </View>
      <ScrollView>
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
        <MenuProfile icon="alert-circle-outline" name="Panduan" appVersion="" />
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
        <MenuProfile icon="logout" name="Keluar" appVersion="logout" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
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
