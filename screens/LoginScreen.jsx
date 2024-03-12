import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Text as RnText } from "react-native";
import { spacing } from "../constants/Spacing";
import loginBg from "../assets/loginBg.png";
import { typography } from "../constants/Typography";
import ButtonM from "../components/myComponents/ButtonM";
import TextInputM from "../components/myComponents/TextInputM";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../features/auth/authSlice";

import { useDispatch } from "react-redux";
const schema = yup.object({
  username: yup.string().required("email is required"),
  password: yup.string().required("password is required"),
});

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const login = (data) => {
    console.log("data in login form", data);

    dispatch(loginUser(data));
  };

  return (
    <ImageBackground
      source={loginBg}
      resizeMode="cover"
      style={[styles.image, styles.img]}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.salutation}>Hi,</Text>
        <Text style={styles.loginText}>Login</Text>
        <TextInputM
          placeholder="Email"
          name="username"
          control={control}
          errors={errors}
        />
        <TextInputM
          placeholder="Password"
          name="password"
          control={control}
          errors={errors}
        />
        <ButtonM btnText={"Login"} onPress={handleSubmit(login)} />
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.huge,
  },
  img: {
    padding: spacing.extraLarge,
    flex: 1,
  },
  salutation: {
    fontSize: 100,
    color: "#4A29C4",
    // fontFamily: typography.primary.bold,
  },
  loginText: {
    fontSize: typography.fontSize.headLine5,
    color: "black",
    marginTop: spacing.massive,
    fontWeight: "bold",
  },
  inputst: {
    marginTop: spacing.large,
  },
});
