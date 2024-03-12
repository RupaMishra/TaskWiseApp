import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { getTokenFromLocalStorage } from "./utils/localStorage";
import { authenticate } from "./features/auth/authSlice";

const Stack = createNativeStackNavigator();

const Root = () => {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((store) => store.auth);
  useEffect(() => {
    async function resolvePromise() {
      try {
        const token = await getTokenFromLocalStorage();
        dispatch(authenticate({ access: token }));
      } catch (error) {}
    }
    resolvePromise();
  }, []);

  let returnNavigation;

  if (!isAuthenticated) {
    returnNavigation = (
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="signup" component={SignUpScreen} />
      </Stack.Navigator>
    );
  } else {
    returnNavigation = (
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    );
  }

  return returnNavigation;
};

export default Root;
