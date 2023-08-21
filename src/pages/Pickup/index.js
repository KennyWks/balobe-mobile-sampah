import {StyleSheet, View, ScrollView, Text} from "react-native";
import React, {useState, useEffect} from "react";
import {Loading, Header} from "../../components";
import {colors, getLocalData, logOut} from "../../utils";
import {showMessage} from "react-native-flash-message";

export default function Pickup({navigation}) {
  const [loading, setLoading] = useState(false);
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const res = await getLocalData("token");
      if (res !== null) {
        const dateNow = new Date();
        if (res.exp > dateNow.getTime()) {
          logOut(
            navigation,
            "Home",
            "Sesi login anda berakhir. Silahkan login ulang!",
          );
        }
      }
    } catch (error) {
      logOut(
        navigation,
        "Home",
        "Sesi login anda berakhir. Silahkan login ulang!",
      );
    }
  };

  const onSave = async () => {
    setLoading(true);
    try {
      setLoading(false);
      showMessage({
        message: "Data berhasil diproses!",
        type: "success",
      });
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
        <Header navigation={navigation} title="Pickup" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.instructionContainer}>
            <Text style={{fontSize: 16, textAlign: "justify"}}>
              Order Layanan Pickup, kolektor segera menjemput sampahmu. Lihat
              panduan berat sampah
              <Text
                onPress={() => {
                  console.log("ok");
                }}
                style={styles.instractionsLink}>
                {" "}
                di sini
              </Text>{" "}
              dan panduan layanan pickup
              <Text
                style={styles.instractionsLink}
                onPress={() => {
                  console.log("ok");
                }}>
                {" "}
                di sini
              </Text>
              .
            </Text>
          </View>

          <View style={styles.instructionContainer}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>
              Informasi Sampah
            </Text>
            <Text style={{fontSize: 16, textAlign: "justify"}}>
              Pilih jenis dan masukkan perkiraan berat sampah. Tidak ada batasan
              berat minimal penjemputan.
            </Text>
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
  instructionContainer: {
    padding: 15,
    paddingTop: 10,
  },
  instractionsLink: {color: "blue", fontSize: 16},
});
