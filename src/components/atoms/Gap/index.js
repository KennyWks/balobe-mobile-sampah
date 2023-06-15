import {View} from "react-native";
import React from "react";

export default function index({width, height}) {
  return (
    <View>
      <View style={{width: width, height: height}}></View>
    </View>
  );
}
