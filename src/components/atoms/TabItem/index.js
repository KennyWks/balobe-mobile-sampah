import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import MiIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {colors, fonts} from "../../../utils";

export default function TabItem({title, size, active, onPress, onLongPress}) {
  const iconColor = active ? colors.primary : colors.black;

  const Icon = () => {
    if (title == "Beranda") {
      return <MiIcon name={"home"} size={size} color={iconColor} />;
    }
    if (title == "Pesanan") {
      return <MiIcon name={"text-box"} size={size} color={iconColor} />;
    }
    if (title == "Chat") {
      return <MiIcon name={"chat-processing"} size={size} color={iconColor} />;
    }
    if (title == "Akun") {
      return <MiIcon name={"account"} size={size} color={iconColor} />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: active => ({
    fontSize: 15,
    color: active ? colors.primary : colors.black,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
