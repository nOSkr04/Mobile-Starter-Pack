import { ActivityIndicator, StyleSheet, Text, TouchableOpacity,  } from "react-native";
import React from "react";
import { Colors, primaryColor } from "../../constants/colors";

type Props = {
  onPress?: () => void;
  label?: string;
  type?: "primary" | "secondary";
  loading?: boolean
}

const Button = ({ onPress, label, loading }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      {loading ? <ActivityIndicator color={Colors.dark.text} /> : 
      <Text style={styles.title}>{label}</Text>
      }
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    padding        : 16,
    borderRadius   : 12,
    alignItems     : "center",
    justifyContent : "center",
    backgroundColor: primaryColor
  },
  title: {
    color     : Colors.dark.text,
    fontFamily: "SemiBold",
    
  }
});