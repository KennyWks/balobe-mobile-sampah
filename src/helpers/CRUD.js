import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const host = "http://192.168.72.1:8089/api";
let token = {};

export const postData = async (path, data = {}) => {
  const accessToken = await AsyncStorage.getItem("token");
  if (accessToken) {
    token = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
  } else {
    token = {};
  }

  try {
    const response = await axios.post(host + path, data, token);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getData = async path => {
  try {
    const response = await axios.get(host + path);
    return response;
  } catch (error) {
    throw error;
  }
};
