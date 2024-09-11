import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps,useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import { View } from "./themed-view";

type Props = TouchableOpacityProps & {
  onPress?: () => void;
  label?: string;
  type?: "primary" | "secondary";
  loading?: boolean;
}

const Button = ({ style,onPress, label, loading, type,  ...otherProps  }: Props) => {
  const colorScheme = useColorScheme();
  if (colorScheme === "dark") {
    if (type === "secondary") {
      return (
        <View>
          <TouchableOpacity  onPress={onPress} style={[styles.root, { backgroundColor: Colors.defaultColor.secondary }, style]} 
        {...otherProps}
        >
            {loading ? <ActivityIndicator color={Colors.dark.text} /> :
            <Text style={[styles.title, { color: Colors.defaultColor.white } ]}  >{label}</Text>
          }
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View>
        <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: Colors.defaultColor.white },style]} {...otherProps}>
          {loading ? <ActivityIndicator color={Colors.dark.text} /> :
          <Text style={[styles.title, { color: Colors.defaultColor.black }]}  >{label}</Text>
        }
        </TouchableOpacity>
      </View>
    );
  }
  if(type ==="secondary"){
    return(
      <View>
        <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: Colors.defaultColor.third },style]} {...otherProps}>
          {loading ? <ActivityIndicator color={Colors.dark.text} /> :
          <Text style={[styles.title, { color: Colors.defaultColor.primary }]}  >{label}</Text>
      }
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: Colors.defaultColor.primary },style]} {...otherProps}>
        {loading ? <ActivityIndicator color={Colors.dark.text} /> :
        <Text style={[styles.title, { color: Colors.defaultColor.white }]}  >{label}</Text>
      }
      </TouchableOpacity>
    </View>
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