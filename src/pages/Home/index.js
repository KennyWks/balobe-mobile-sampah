import {StyleSheet, Text, View, ScrollView, RefreshControl} from "react-native";
import React, {useEffect, useState, useCallback} from "react";
import HomeProfile from "../../components/molecules/HomeProfile";
import NewsItem from "../../components/molecules/NewsItem";
import {colors, fonts} from "../../utils";
import PickupDropOff from "../../components/molecules/PickupDropOff";
import {getData} from "../../helpers/CRUD";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

export default function Home({navigation}) {
  const tabBarHeight = useBottomTabBarHeight();
  const [news, setNews] = useState([]);
  const [refreshingEvents, setRefreshingEvents] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  const onRefreshEvents = useCallback(() => {
    setRefreshingEvents(true);
    getNews();
    setRefreshingEvents(false);
  }, []);

  const getNews = async () => {
    try {
      const result = await getData("/news");
      if (result.data) {
        setNews(result.data.data);
      }
    } catch (e) {
      showMessage({
        message: "Data gagal di ambil",
        type: "danger",
      });
    }
  };

  return (
    <View style={styles.container(tabBarHeight)}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshingEvents}
            onRefresh={onRefreshEvents}
          />
        }>
        <HomeProfile />
        <PickupDropOff
          name="Pickup"
          desc="Mitra akan menjemput sampahmu"
          icon="truck-fast-outline"
          color={colors.greenLight}
          onPress={() => {}}
        />
        <PickupDropOff
          name="Drop Off"
          desc="Mitra akan menjemput sampahmu"
          icon="package-variant"
          color={colors.blueLight}
          onPress={() => {}}
        />
        <Text style={styles.sectionLabel}>Berita</Text>
        {news.map((v, i) => (
          <NewsItem
            key={v.news_id}
            title={v.judul}
            date={v.tanggal}
            image={v.foto}
            onPress={() => {
              navigation.navigate({
                name: "ReadNews",
                params: {
                  id: v.news_id,
                },
              });
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: tabBarHeight => ({
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    paddingBottom: tabBarHeight + 7,
  }),
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginTop: 15,
    marginBottom: 16,
    color: colors.text.primary,
  },
});
