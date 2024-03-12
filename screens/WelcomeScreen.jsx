import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreenCard from "../components/WelcomeScreenCard";

const WelcomeScreen = () => {
  return (
    <View style={styles.flexContainer}>
      <WelcomeScreenCard title={"Task1"} />
      <WelcomeScreenCard title={"Task2"} />
      <WelcomeScreenCard title={"Task3"} />
      <WelcomeScreenCard title={"Task4"} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
