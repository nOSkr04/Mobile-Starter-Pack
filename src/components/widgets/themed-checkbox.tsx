import { StyleSheet, View } from "react-native";
import React from "react";
import { TickIcon } from "../../assets/icons/tick";
import { primaryColor } from "../../constants/colors";

const CheckBox = ({ checked }: { checked?: boolean }) => {
  if (checked) {
    return (
      <View style={styles.container} >
        <TickIcon />
      </View>
    );
  }
  return (
    <View style={styles.container} />
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    borderRadius   : 8,
    backgroundColor: primaryColor,
    width          : 20,
    height         : 20,
    alignItems     : "center",
    justifyContent : "center",
    borderWidth    : 1

  }
});