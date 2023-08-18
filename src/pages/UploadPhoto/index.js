import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {Button, Gap, Header, Link, Loading} from "../../components";
import {ILPhotoProfileIsNull, IconPlus, IconRemove} from "../../assets";
import {colors, fonts} from "../../utils";
import {launchImageLibrary} from "react-native-image-picker";
import {showMessage} from "react-native-flash-message";
import {postApiData} from "../../helpers/CRUD";

export default function UploadPhoto({navigation, route}) {
  const {user_id} = route.params;

  const [photoUri, setPhotoUri] = useState(ILPhotoProfileIsNull);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoType, setPhotoType] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const getImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxHeight: 200, maxWidth: 200, includeBase64: true},
      response => {
        if (response.didCancel || response.errorCode) {
          showMessage({
            message: "Opps... Terjadi masalah saat pilih file!",
            type: "danger",
          });
        } else {
          const source = {uri: response.assets[0].uri};
          setPhotoUri(source);
          setHasPhoto(true);
          setPhotoType(response.assets[0].type);
          setPhoto(response.assets[0].base64);
        }
      },
    );
  };

  const uploadAndContinue = async () => {
    setLoading(true);
    try {
      const result = await postApiData("/user/upload-photo", {
        user_id: user_id,
        photo: photo,
        type: photoType,
      });
      setLoading(false);
      showMessage({
        message: "Data berhasil diproses!",
        type: "success",
      });
      // navigation.replace("MainApp");
    } catch (error) {
      setLoading(false);
      showMessage({
        message: "Data gagal diproses!",
        type: "danger",
      });
    }
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
            <Image style={styles.avatar} source={photoUri} />
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
            onPress={uploadAndContinue}
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
      {loading && <Loading />}
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
