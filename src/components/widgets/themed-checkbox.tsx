import { StyleSheet, View, useColorScheme } from "react-native";
import React from "react";
import { TickIcon } from "../../assets/icons/tick";
import { Colors } from "../../constants/colors";

const CheckBox = ({ checked }: { checked?: boolean }) => {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === "dark" ? Colors.defaultColor.white : Colors.defaultColor.primary;
  if (checked) {
    return (
      <View style={[styles.container, { backgroundColor }]} >
        <TickIcon color={colorScheme === "dark" ? Colors.defaultColor.black : Colors.defaultColor.white} />
      </View>
    );
  }
  return (
    <View style={[styles.container, { backgroundColor }]} />
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    borderRadius  : 8,
    width         : 20,
    height        : 20,
    alignItems    : "center",
    justifyContent: "center",
    borderWidth   : 1

  }
});