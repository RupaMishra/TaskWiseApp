import React from "react";
import { Button } from "react-native-paper";
import { spacing } from "../../constants/Spacing";
import { StyleSheet } from "react-native";

const ButtonM = ({ btnText, paperBtnProps }) => {
  return (
    <Button mode="contained" style={[styles.btn, { ...paperBtnProps }]}>
      {btnText && btnText ? btnText : "Submit"}
    </Button>
  );
};

export default ButtonM;

const styles = StyleSheet.create({
  btn: {
    padding: spacing.tiny,
    borderRadius: spacing.small,
    marginTop: spacing.small,
  },
});
