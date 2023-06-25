import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import HomeProfile from "../../components/molecules/HomeProfile";
import NewsItem from "../../components/molecules/NewsItem";
import {colors, fonts} from "../../utils";
import PickupDropOff from "../../components/molecules/PickupDropOff";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeProfile />
        <PickupDropOff
          name="Pickup"
          desc="Mitra akan menjemput sampahmu"
          icon="text-box"
          color={colors.greenLight}
          onPress={() => {}}
        />
        <PickupDropOff
          name="Pickup"
          desc="Mitra akan menjemput sampahmu"
          icon="text-box"
          color={colors.blueLight}
          onPress={() => {}}
        />
        <Text style={styles.sectionLabel}>Berita</Text>
        <NewsItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginTop: 15,
    marginBottom: 16,
    color: colors.text.primary,
  },
});
