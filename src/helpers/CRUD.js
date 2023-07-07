import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const url = "http://192.168.1.21:8089";
const host = url + "/api";
let token = {};

export const postApiData = async (path, data = {}) => {
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

export const getApiData = async path => {
  try {
    const response = await axios.get(host + path);
    return response;
  } catch (error) {
    throw error;
  }
};
