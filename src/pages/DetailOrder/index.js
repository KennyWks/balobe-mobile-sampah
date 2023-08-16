import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Header} from "../../components";
import {colors} from "../../utils";

export default function DetailOrder({route, navigation}) {
  const {judul, deskripsi} = route.params;
  return (
    <View style={styles.container}>
      <Header type="default" title="Detail Pesanan" navigation={navigation} />
      <View style={styles.content}>
        <View>
          <Text>{judul}</Text>
          <Text>{deskripsi}</Text>
        </View>
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
    padding: 10,
  },
});
