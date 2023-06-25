import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import {OrdersItem} from "../../components";
import {colors, fonts} from "../../utils";

export default function Orders() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Daftar Order</Text>
          <OrdersItem
            name="Transaksi berhasil"
            desc="silahkan cek point anda"
          />
          <OrdersItem
            name="Transaksi berhasil"
            desc="silahkan cek saldo anda"
          />
          <OrdersItem name="Transaksi gagal" desc="barang belum sampai" />
          <OrdersItem
            name="Transaksi dalam proses"
            desc="barang dalam perjalanan"
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
    marginLeft: 16,
  },
});
