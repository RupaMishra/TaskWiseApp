import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { spacing } from "../constants/Spacing";
import { CheckBox } from "react-native-web";

const WelcomeScreenCard = ({ title, checkListItem }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.cardStyle}>
      <Text style={styles.titleStyle}>{title && title}</Text>
      <View style={styles.checkboxContainer}>
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text> */}
      </View>
    </View>
  );
};

export default WelcomeScreenCard;

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    padding: spacing.medium,
    borderRadius: spacing.small,
    margin: spacing.small,
    width: Dimensions.get("screen").width / 2 - spacing.large,
  },
  titleStyle: {
    fontSize: 18,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
