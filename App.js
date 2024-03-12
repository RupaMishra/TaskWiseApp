import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import Root from "./Root";
import { getTokenFromLocalStorage } from "./utils/localStorage";
import { useEffect } from "react";
import { authenticate } from "./features/auth/authSlice";

export default function App() {
 

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
