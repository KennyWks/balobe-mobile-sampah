import axios from "axios";
import {getLocalData} from "../utils";

export const url = "http://192.168.102.60:8089";
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

export const getApiDataWithoutHeader = async path => {
  try {
    const response = await axios.get(route + path);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getApiData = async path => {
  try {
    const token = await getLocalData("token", false);
    const headers = {
      headers: {Authorization: "Bearer " + token.replace(/\"/g, "")},
    };
    const response = await axios.get(route + path, headers);
    return response;
  } catch (error) {
    throw error;
  }
};
