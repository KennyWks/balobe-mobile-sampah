import {StyleSheet, Text, View, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import {OrdersItem, Loading} from "../../components";
import {colors, fonts} from "../../utils";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {getApiData} from "../../helpers/CRUD";

export default function Orders({navigation}) {
  const tabBarHeight = useBottomTabBarHeight();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    setLoading(true);
    try {
      const result = await getApiData("/user/transaction");
      setOrder(result.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container(tabBarHeight)}>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Daftar Pesanan</Text>
            {order.length > 0 &&
              order.map(v => (
                <OrdersItem
                  key={v.transaction_id}
                  judul={v.judul}
                  deskripsi={v.deskripsi}
                  onPress={() => {
                    navigation.navigate({
                      name: "DetailOrder",
                      params: {
                        judul: v.judul,
                        deskripsi: v.deskripsi,
                      },
                    });
                  }}
                />
              ))}
          </ScrollView>
        </View>
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
