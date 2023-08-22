import {StyleSheet, View, ScrollView, Text, Modal} from "react-native";
import React, {useState, useEffect} from "react";
import {Loading, Header, Button, ListBullet, Title} from "../../components";
import {colors, getLocalData, logOut} from "../../utils";
import {showMessage} from "react-native-flash-message";

export default function Pickup({navigation}) {
  const [loading, setLoading] = useState(false);
  const [alamat, setAlamat] = useState("");
  const [modalVisiblePanduanBerat, setModalVisiblePanduanBerat] =
    useState(false);
  const [modalVisiblePanduanPickup, setModalVisiblePanduanPickup] =
    useState(false);

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
              Pesan Layanan Pickup, kolektor segera menjemput sampahmu. Lihat
              panduan berat sampah
              <Text
                style={styles.instractionsLink}
                onPress={() => setModalVisiblePanduanPickup(true)}>
                {" "}
                di sini
              </Text>{" "}
              dan panduan layanan pickup
              <Text
                style={styles.instractionsLink}
                onPress={() => setModalVisiblePanduanBerat(true)}>
                {" "}
                di sini
              </Text>
              .
            </Text>
          </View>
          <View style={styles.instructionContainer}>
            <Title label="Informasi Sampah" fontSize={18} textAlign={"left"} />
            <Text style={{fontSize: 16, textAlign: "justify"}}>
              Pilih jenis dan masukkan perkiraan berat sampah. Tidak ada batasan
              berat minimal penjemputan.
            </Text>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisiblePanduanBerat}
            onRequestClose={() => {
              setModalVisiblePanduanBerat(!modalVisiblePanduanBerat);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Title
                  label="Ketentuan Berat"
                  fontSize={18}
                  textAlign={"center"}
                />
                <View style={{alignItems: "flex-start", marginVertical: 10}}>
                  <ListBullet
                    unicode={"\u2B24"}
                    label={
                      "Berat dibawah 5 kg mungkin akan dikenakan Biaya Tambahan."
                    }
                  />
                  <ListBullet
                    unicode={"\u2B24"}
                    label={
                      "Berat dibawah 10 kg hanya dapat ditukaran menjadi poin."
                    }
                  />
                  <ListBullet
                    unicode={"\u2B24"}
                    label={
                      "Berat melebihi 10 kg dapat ditukaran menjadi uang atau poin."
                    }
                  />
                </View>
                <Button
                  title="Mengerti"
                  onPress={() =>
                    setModalVisiblePanduanBerat(!modalVisiblePanduanBerat)
                  }
                />
              </View>
            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisiblePanduanPickup}
            onRequestClose={() => {
              setModalVisiblePanduanPickup(!modalVisiblePanduanPickup);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Title
                  label="Ketentuan Pickup"
                  fontSize={18}
                  textAlign={"center"}
                />
                {/* <View style={{alignItems: "flex-start", marginVertical: 10}}>
                  <ListBullet
                    unicode={"\u2B24"}
                    label={
                      "Berat dibawah 5 kg mungkin akan dikenakan Biaya Tambahan."
                    }
                  />
                  <ListBullet
                    unicode={"\u2B24"}
                    label={
                      "Berat dibawah 10 kg hanya dapat ditukaran menjadi poin."
                    }
                  />
                  <ListBullet
                    unicode={"\u2B24"}
                    label={
                      "Berat melebihi 10 kg dapat ditukaran menjadi uang atau poin."
                    }
                  />
                </View> */}
                <Button
                  title="Mengerti"
                  onPress={() =>
                    setModalVisiblePanduanPickup(!modalVisiblePanduanPickup)
                  }
                />
              </View>
            </View>
          </Modal>
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
  instructionContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  instractionsLink: {color: "blue", fontSize: 16},
  //style for modal
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.loading,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
