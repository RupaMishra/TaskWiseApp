import React from "react";
import { Button } from "react-native-paper";
import { spacing } from "../../constants/Spacing";
import { StyleSheet } from "react-native";

const ButtonM = ({ btnText, paperBtnProps, onPress }) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[styles.btn, { ...paperBtnProps }]}
    >
      {btnText && btnText ? btnText : "Submit"}
    </Button>
  );
};

export default ButtonM;

const styles = StyleSheet.create({
  btn: {
    padding: spacing.tiny,
    borderRadius: spacing.small,
    marginTop: spacing.large,
    backgroundColor: "#000814",
  },
});
