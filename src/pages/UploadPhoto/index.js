import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {Button, Gap, Header, Link} from "../../components";
import {ILPhotoProfileIsNull, IconPlus, IconRemove} from "../../assets";
import {colors, fonts} from "../../utils";
import {launchImageLibrary} from "react-native-image-picker";
import {showMessage} from "react-native-flash-message";

export default function UploadPhoto({navigation}) {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILPhotoProfileIsNull);
  const getImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxHeight: 200, maxWidth: 200},
      response => {
        if (response.didCancel || response.errorCode) {
          showMessage({
            message: "Opps... Terjadi masalah saat pilih file!",
            type: "danger",
          });
        } else {
          const source = {uri: response.assets[0].uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Header
        type="default"
        title="Unggah Foto Profil"
        navigation={navigation}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image style={styles.avatar} source={photo} />
            {hasPhoto && <IconRemove style={styles.addPhoto} />}
            {!hasPhoto && <IconPlus style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>Nama User</Text>
          <Text style={styles.proffesion}>Pekerjaan USer</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Unggah & Lanjutkan"
            onPress={() => {
              navigation.replace("MainApp");
            }}
          />
          <Gap height={30} />
          <Link
            title="Lewati proses ini"
            align="center"
            center={16}
            onPress={() => {
              navigation.replace("MainApp");
            }}
          />
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
  avatar: {height: 110, width: 110, borderRadius: 110 / 2},
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
