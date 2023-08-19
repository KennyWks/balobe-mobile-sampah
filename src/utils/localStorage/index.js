import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import {showMessage} from "react-native-flash-message";

export const storeLocalData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    showMessage({
      message: "Gagal menyimpan data",
      type: "danger",
    });
  }
};

export const getLocalData = async (key, decode = true) => {
  try {
    const result = await AsyncStorage.getItem(key);
    if (decode) {
      const decodeToken = jwtDecode(result);
      return decodeToken;
    }
    return result;
  } catch (e) {}
};

export const removeLocalData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};

export const logOut = async (navigation, page, message) => {
  try {
    await removeLocalData("token");
    if (page !== "Login") {
      navigation.replace("Login");
    }
    setTimeout(() => {
      showMessage({
        message: message,
        type: "success",
      });
    }, 500);
  } catch (e) {}
};
