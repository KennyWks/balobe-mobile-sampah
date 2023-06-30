import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import HomeProfile from "../../components/molecules/HomeProfile";
import NewsItem from "../../components/molecules/NewsItem";
import {colors, fonts} from "../../utils";
import PickupDropOff from "../../components/molecules/PickupDropOff";
import {
  UserProfile1,
  UserProfile2,
  UserProfile3,
  UserProfile4,
} from "../../assets";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
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
        <NewsItem
          title="Lorem ipsum dolor sit amet 
          iste perspiciatis veritatis qui!"
          date="1-01-2021 10:09"
          image={UserProfile1}
          onPress={() => {
            navigation.navigate({
              name: "ReadNews",
              params: {
                id: 1,
                image: "",
              },
            });
          }}
        />
        <NewsItem
          title="Consectetur adipisicing elit. Explicabo
          iste perspiciatis veritatis qui!"
          date="8-08-2021 08:09"
          image={UserProfile2}
          onPress={() => {
            navigation.navigate({
              name: "ReadNews",
              params: {
                id: 2,
                image: "",
              },
            });
          }}
        />
        <NewsItem
          title="Explicabo iste perspiciatis veritatis qui!"
          date="Today"
          image={UserProfile3}
          onPress={() => {
            navigation.navigate({
              name: "ReadNews",
              params: {
                id: 3,
                image: "",
              },
            });
          }}
        />
        <NewsItem
          title="Adipisicing elit. Explicabo
          iste perspiciatis veritatis qui!"
          date="17-01-2021 16:09"
          image={UserProfile4}
          onPress={() => {
            navigation.navigate({
              name: "ReadNews",
              params: {
                id: 4,
                image: "",
              },
            });
          }}
        />
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
