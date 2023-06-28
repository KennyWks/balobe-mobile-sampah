import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Button, Gap, Header, Link} from "../../components";
import {ILPhotoProfileIsNull, IconPlus} from "../../assets";
import {colors, fonts} from "../../utils";

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Unggah Foto Profil" navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={ILPhotoProfileIsNull} />
            <IconPlus style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Nama User</Text>
          <Text style={styles.proffesion}>Pekerjaan USer</Text>
        </View>
        <View>
          <Button title="Unggah & Lanjutkan" />
          <Gap height={30} />
          <Link title="Lewati proses ini" align="center" center={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: "space-between",
  },
  profile: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  avatar: {height: 110, width: 110},
  avatarWrapper: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  addPhoto: {
    position: "absolute",
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: "center",
  },
  proffesion: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: "center",
    color: colors.text.secondary,
    marginTop: 4,
  },
});
