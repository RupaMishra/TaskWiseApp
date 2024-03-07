import React from "react";
import { TextInput } from "react-native-paper";
import { spacing } from "../../constants/Spacing";
import { StyleSheet } from "react-native";

const TextInputM = ({ paperTextProp, placeholder, label, right, left }) => {
  return (
    <TextInput
      mode="outlined"
      label={label && label ? label : "Outlined input"}
      placeholder={placeholder && placeholder ? placeholder : "Type something"}
      style={[{ ...paperTextProp }, styles.txt]}
      right={right && <TextInput.Icon icon={right} />}
      left={left && <TextInput.Icon icon={left} />}
      outlineStyle={styles.borderColor}
    />
  );
};

export default TextInputM;

const styles = StyleSheet.create({
  txt: {
    borderRadius: spacing.small,
    marginTop: spacing.small,
  },
  borderColor: {
    borderColor: "white",
    borderRadius: 12,
  },
});
