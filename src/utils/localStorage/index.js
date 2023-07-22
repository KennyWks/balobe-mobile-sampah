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
    const token = await AsyncStorage.getItem(key);
    if (decode) {
      const decodeToken = jwtDecode(token);
      return decodeToken;
    }
    return token;
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
        type: "danger",
      });
    }, 500);
  } catch (e) {}
};
