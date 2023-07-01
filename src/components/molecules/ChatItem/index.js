import {StyleSheet, Text, View} from "react-native";
import React from "react";
import IsMe from "./IsMe";
import Other from "./Other";

export default function ChatItem({isMe, message, time}) {
  if (isMe) {
    return <IsMe message={message} time={time} />;
  }
  return <Other message={message} time={time} />;
}

const styles = StyleSheet.create({});
