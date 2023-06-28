import {ScrollView, StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {Profile} from "../../components";
import {colors, fonts} from "../../utils";
import {UserProfile1} from "../../assets";

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <View style={styles.boderProfilImage}>
          <Image source={UserProfile1} style={styles.avatar} />
        </View>
        <Text style={styles.name}>Kenny Wks</Text>
        <Text style={styles.point}>0 Poin</Text>
      </View>
      <ScrollView>
        <Profile
          icon="pencil-outline"
          name="Ubah Profil"
          appVersion=""
          onPress={() => {
            // navigation.navigate('');
          }}
        />
        <View style={styles.wrapperSubTitle}>
          <Text>Tentang</Text>
        </View>
        <Profile icon="alert-circle-outline" name="Panduan" appVersion="" />
        <Profile
          icon="text-box-check-outline"
          name="Syarat & Ketentuan"
          appVersion=""
        />
        <Profile
          icon="shield-lock-outline"
          name="Kebijakan Privasi"
          appVersion=""
        />
        <Profile
          icon="help-circle-outline"
          name="Pertanyaan Umum"
          appVersion=""
        />
        <View style={styles.wrapperSubTitle}>
          <Text>Lainnya</Text>
        </View>
        <Profile icon="leaf" name="Versi Aplikasi" appVersion="1.0.0" />
        <Profile icon="logout" name="Keluar" appVersion="logout" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperImage: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: colors.greenLight,
    borderRadius: 15,
  },
  boderProfilImage: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  point: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
  },
  wrapperSubTitle: {backgroundColor: colors.blueLight, padding: 10},
});
