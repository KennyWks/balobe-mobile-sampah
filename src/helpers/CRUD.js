import axios from "axios";
import {getLocalData} from "../utils";

export const url = "http://192.168.1.22:8000";
const route = url + "/api";

export const postApiDataWithoutHeader = async (path, data = {}) => {
  try {
    const response = await axios.post(route + path, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiData = async (path, data = {}) => {
  try {
    const token = await getLocalData("token", false);
    const headers = {
      headers: {Authorization: "Bearer " + token.replace(/\"/g, "")},
    };
    const response = await axios.post(route + path, data, headers);
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
