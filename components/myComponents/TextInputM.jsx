import React from "react";
import { TextInput } from "react-native-paper";
import { spacing } from "../../constants/Spacing";
import { StyleSheet, View } from "react-native";
import { Controller } from "react-hook-form";

const TextInputM = ({
  paperTextProp,
  placeholder,
  label,
  right,
  left,
  control,
  errors,
  name,
}) => {
  return (
    <View>
      <Controller
        name={name && name}
        control={control && control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <TextInput
              mode="outlined"
              label={label && label ? label : ""}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder && placeholder ? placeholder : ""}
              style={styles.txt}
              right={right && <TextInput.Icon icon={right} />}
              left={left && <TextInput.Icon icon={left} />}
              outlineStyle={styles.borderColor}
              {...paperTextProp}
            />
          );
        }}
      />
      {/* {errors && } */}
    </View>
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
