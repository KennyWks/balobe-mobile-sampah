import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {
  Splash,
  GetStarted,
  Login,
  Register,
  UploadPhoto,
  Home,
  Orders,
  DetailOrder,
  Messages,
  Account,
  Chatting,
  ReadNews,
  UpdateProfile,
  Pickup,
} from "../src/pages";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomNavigator from "../src/components/molecules/BottomNavigator";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Beranda" component={Home} />
      <Tab.Screen name="Pesanan" component={Orders} />
      <Tab.Screen name="Chat" component={Messages} />
      <Tab.Screen name="Akun" component={Account} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="DetailOrder"
        component={DetailOrder}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="ReadNews"
        component={ReadNews}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Pickup"
        component={Pickup}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;
