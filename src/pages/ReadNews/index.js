import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {IMGetStarted} from "../../assets";
import {colors, fonts} from "../../utils";
import {ScrollView} from "react-native-gesture-handler";
import {Header} from "../../components";

export default function ReadNews({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Berita" navigation={navigation} />
      <View style={styles.content}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.wrapperTitle}>
              <Text style={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </View>
            <View style={styles.wrapperNews}>
              <Image source={IMGetStarted} style={styles.images} />
              <View style={styles.wrapperDesc}>
                <Text style={styles.desc}>
                  Harum ipsum praesentium quisquam? Quia eius a quas numquam est
                  eos dolorum nesciunt consectetur voluptates quos voluptatum,
                  veritatis in ab eaque error!adNews. Harum ipsum praesentium
                  quisquam? Quia eius a quas numquam est eos dolorum nesciunt
                  consectetur voluptates quos voluptatum, veritatis in ab eaque
                  error!adNews Harum ipsum praesentium quisquam? Quia eius a
                  quas numquam est eos dolorum nesciunt consectetur voluptates
                  quos voluptatum, veritatis in ab eaque error!adNews Harum
                  ipsum praesentium quisquam? Quia eius a quas numquam est eos
                  dolorum nesciunt consectetur voluptates quos voluptatum,
                  veritatis in ab eaque error!adNews
                </Text>
                <Text style={styles.desc}>
                  Harum ipsum praesentium quisquam? Quia eius a quas numquam est
                  eos dolorum nesciunt consectetur voluptates quos voluptatum,
                  veritatis in ab eaque error!adNews. Harum ipsum praesentium
                  quisquam? Quia eius a quas numquam est eos dolorum nesciunt
                  consectetur voluptates quos voluptatum, veritatis in ab eaque
                  error!adNews Harum ipsum praesentium quisquam? Quia eius a
                  quas numquam est eos dolorum nesciunt consectetur voluptates
                  quos voluptatum, veritatis in ab eaque error!adNews Harum
                  ipsum praesentium quisquam? Quia eius a quas numquam est eos
                  dolorum nesciunt consectetur voluptates quos voluptatum,
                  veritatis in ab eaque error!adNews
                </Text>
                <Text style={styles.desc}>
                  Harum ipsum praesentium quisquam? Quia eius a quas numquam est
                  eos dolorum nesciunt consectetur voluptates quos voluptatum,
                  veritatis in ab eaque error!adNews. Harum ipsum praesentium
                  quisquam? Quia eius a quas numquam est eos dolorum nesciunt
                  consectetur voluptates quos voluptatum, veritatis in ab eaque
                  error!adNews Harum ipsum praesentium quisquam? Quia eius a
                  quas numquam est eos dolorum nesciunt consectetur voluptates
                  quos voluptatum, veritatis in ab eaque error!adNews Harum
                  ipsum praesentium quisquam? Quia eius a quas numquam est eos
                  dolorum nesciunt consectetur voluptates quos voluptatum,
                  veritatis in ab eaque error!adNews
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  wrapperTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  wrapperNews: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  images: {
    maxHeight: 240,
    maxWidth: 240,
    paddingTop: 20,
    resizeMode: "cover",
  },
  wrapperDesc: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    margin: 10,
    textAlign: "justify",
  },
});
