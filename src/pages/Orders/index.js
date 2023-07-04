import {StyleSheet, Text, View, ScrollView} from "react-native";
import React, {useState} from "react";
import {OrdersItem} from "../../components";
import {colors, fonts} from "../../utils";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

export default function Orders({navigation}) {
  const tabBarHeight = useBottomTabBarHeight();

  const [order, setOrder] = useState([
    {id: 1, name: "Transaksi 1", desc: "silahkan cek point anda"},
    {id: 2, name: "Transaksi 2", desc: "silahkan cek saldo anda"},
    {id: 3, name: "Transaksi 3", desc: "barang dalam perjalanan"},
    {id: 4, name: "Transaksi 3", desc: "barang dalam perjalanan"},
    {id: 5, name: "Transaksi 3", desc: "barang dalam perjalanan"},
    {id: 6, name: "Transaksi 3", desc: "barang dalam perjalanan"},
    {id: 7, name: "Transaksi 3", desc: "barang dalam perjalanan"},
    {id: 8, name: "Transaksi 3", desc: "barang dalam perjalanan"},
  ]);

  return (
    <View style={styles.container(tabBarHeight)}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Daftar Pesanan</Text>
          {order.length > 0 &&
            order.map(v => (
              <OrdersItem
                key={v.id}
                name={v.name}
                desc={v.desc}
                onPress={() => {
                  navigation.navigate({
                    name: "DetailOrder",
                    params: {
                      name: v.name,
                      desc: v.desc,
                    },
                  });
                }}
              />
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: tabBarHeight => ({
    backgroundColor: colors.white,
    flex: 1,
    paddingBottom: tabBarHeight + 7,
  }),
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
