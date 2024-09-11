import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, useColorScheme, } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

type Props = {
  onPress?: () => void;
  label?: string;
  type?: "primary" | "secondary";
  loading?: boolean
}

const Button = ({ onPress, label, loading, type }: Props) => {
  const colorScheme = useColorScheme();
  if (colorScheme === "dark") {
    if (type === "secondary") {
      return (
        <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: Colors.defaultColor.secondary }]}>
          {loading ? <ActivityIndicator color={Colors.dark.text} /> :
          <Text style={[styles.title, { color: Colors.defaultColor.white } ]}  >{label}</Text>
          }
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: Colors.defaultColor.white }]}>
        {loading ? <ActivityIndicator color={Colors.dark.text} /> :
        <Text style={[styles.title, { color: Colors.defaultColor.black }]}  >{label}</Text>
        }
      </TouchableOpacity>
    );
  }
  if(type ==="secondary"){
    return(
      <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: Colors.defaultColor.third }]}>
        {loading ? <ActivityIndicator color={Colors.dark.text} /> :
        <Text style={[styles.title, { color: Colors.defaultColor.primary }]}  >{label}</Text>
      }
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: Colors.defaultColor.primary }]}>
      {loading ? <ActivityIndicator color={Colors.dark.text} /> :
      <Text style={[styles.title, { color: Colors.defaultColor.white }]}  >{label}</Text>
      }
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    borderRadius   : 12,
    alignItems     : "center",
    justifyContent : "center",
    paddingVertical: 15.5
  },
  title: {
    fontFamily: "SemiBold",
    fontSize  : 16,
  }
});