import { TextInput as DefaultTextInput, StyleSheet, type TextInputProps, } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import React, { ReactNode, useState } from "react";
import { dangerColor, primaryColor } from "../../constants/colors";
import { View } from "./themed-view";
import { Text } from "./themed-text";
export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  error?: string
  label?: string
};


const TextInput = ({ style, lightColor, darkColor, prefix, suffix, error, label, ...otherProps }: ThemedTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, "border");
  const placeholderColor = useThemeColor({ light: lightColor, dark: darkColor }, "placeholder");

  return (
    <>
      {label &&
        <View style={styles.header}>
          <Text size={14}>
            {label}
          </Text>
        </View>
      }
      <View style={[
        styles.root,
      {  borderColor },
      error ? { borderColor: dangerColor } : undefined,
      isFocused && styles.focused,

      ]}>
        {prefix ?
          <>
            <View style={styles.w16} />
            {prefix}
            <View style={styles.w12} />
          </>
          : <View style={styles.w16} />
        }
        <DefaultTextInput
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholderTextColor={error ? dangerColor : placeholderColor}
          style={[
            { backgroundColor, },
            styles.container,
            style,
          ]}
          {...otherProps}
        />
        {suffix &&
          <>
            <View style={styles.w12} />
            {suffix}
            <View style={styles.w16} />
          </>
        }
      </View>
      <Text size={14} style={[styles.error, !error && styles.invis]}>{error || "error"}</Text>
    </>
  );
};

export { TextInput };

const styles = StyleSheet.create({
  root: {
    flex          : 1,
    borderWidth   : 1,
    borderRadius  : 16,
    flexDirection : "row",
    alignItems    : "center",
    justifyContent: "center",
  },
  container: {
    flex             : 1,
    paddingVertical  : 13,
    borderRadius     : 16,
    textAlignVertical: "top",
    fontSize         : 16,
    fontFamily       : "Inter_Regular",
  },
  focused: {
    borderColor: primaryColor
  },
  w16: {
    width: 16,
  },
  w12: {
    width: 12
  },
  header: {
    flexDirection: "row",
    alignItems   : "center",
    marginBottom : 6
  },
  error: {
    color    : dangerColor,
    textAlign: "right",
    marginTop: 6
  },
  invis: {
    opacity: 0
  }
});
