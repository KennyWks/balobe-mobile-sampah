import axios from "axios";
import {getLocalData} from "../utils";

export const url = "http://192.168.54.60:8089";
const host = url + "/api";

export const postApiData = async (path, data = {}) => {
  try {
    const token = await getLocalData("token", false);
    const response = await axios.post(host + path, data, {
      headers: {
        Authorization: "Bearer " + token ? token : "",
      },
    });
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
