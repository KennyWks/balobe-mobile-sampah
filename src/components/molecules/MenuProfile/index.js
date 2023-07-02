import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import React from "react";
import {colors, fonts} from "../../../utils";
import MiIcon from "react-native-vector-icons/MaterialCommunityIcons";

const MenuProfile = ({icon, name, onPress, appVersion}) => {
  const DirectIcon = () => {
    if (appVersion !== "" && appVersion !== "logout") {
      return <Text>{appVersion}</Text>;
    }

    if (appVersion === "logout") {
      return <></>;
    }
    return (
      <MiIcon
        name={"chevron-right"}
        size={30}
        color={colors.secondary}
        style={styles.directIcon}
      />
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrappContainer}>
        <View style={styles.container}>
          <MiIcon
            name={icon}
            size={30}
            color={colors.secondary}
            style={styles.icon}
          />
          <View style={styles.wrappMenu}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        <View style={styles.wrappTextIcon}>
          <DirectIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuProfile;

const styles = StyleSheet.create({
  wrappContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    alignItems: "center",
    padding: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 12,
  },
  directIcon: {},
  wrappMenu: {
    alignItems: "center",
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  wrappTextIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
