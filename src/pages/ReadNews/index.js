import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React, {useState, useEffect} from "react";
import {colors, fonts} from "../../utils";
import {ScrollView} from "react-native-gesture-handler";
import {Header} from "../../components";
import {url, getApiDataWithoutHeader} from "../../helpers/CRUD";

export default function ReadNews({navigation, route}) {
  const {id} = route.params;

  const [news, setNews] = useState([]);

  useEffect(() => {
    readNews();
  }, []);

  const readNews = async () => {
    try {
      const result = await getApiDataWithoutHeader("/news/" + id);
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
    <View style={styles.container}>
      <Header title="Berita" navigation={navigation} />
      <View style={styles.content}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.wrapperTitle}>
              <Text style={styles.title}>{news.judul}</Text>
            </View>
            <View style={styles.wrapperNews}>
              <Image
                source={{
                  uri: url + news.foto,
                }}
                style={styles.image}
              />
              <View style={styles.wrapperDesc}>
                <Text style={styles.desc}>{news.isi}</Text>
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
  image: {
    width: 240,
    height: 240,
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
