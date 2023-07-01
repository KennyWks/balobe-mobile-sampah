import {StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import MiIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {colors} from "../../../utils";

export default function BtnIconSend({icon, disable, onPress}) {
  return (
    <View style={styles.container(disable)}>
      <MiIcon name={icon} size={35} color={!disable ? "#FFFFFF" : "#434242"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: !disable ? colors.tertiary : colors.disable,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
