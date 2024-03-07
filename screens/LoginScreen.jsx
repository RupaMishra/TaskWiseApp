import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Text as RnText } from "react-native";
import { spacing } from "../constants/Spacing";
import loginBg from "../assets/loginBg.png";
import { typography } from "../constants/Typography";
import ButtonM from "../components/myComponents/ButtonM";
import TextInputM from "../components/myComponents/TextInputM";

const LoginScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.salutation}>Hi,</Text>
      <RnText style={styles.loginText} fontWeight={"bold"}>
        Login
      </RnText>
      <TextInputM label="Email" />
      <TextInputM label="Password" />
      <ButtonM btnText={"Login"} />
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: spacing.extraLarge,
    margin: spacing.extraLarge,
    flex: 1,
  },
  salutation: {
    fontSize: 100,
    color: "#4A29C4",
  },
  loginText: {
    fontSize: typography.fontSize.headLine5,
    color: "#4A29C4",
    marginTop: spacing.large,
  },
  inputst: {
    marginTop: spacing.large,
  },
});
