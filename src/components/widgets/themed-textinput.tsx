import { TextInput as DefaultTextInput, StyleSheet, type TextInputProps, useColorScheme, } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import React, { ReactNode, useCallback, useState } from "react";
import { Colors, } from "../../constants/colors";
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
  const colorScheme = useColorScheme();

  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "textinput");
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, "border");
  const placeholderColor = useThemeColor({ light: lightColor, dark: darkColor }, "placeholder");
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const focused = useCallback(() => {
    if (isFocused) {
      return colorScheme === "dark" ? styles.focused2 : styles.focused;
    }
    return undefined;
  }, [colorScheme, isFocused]);
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
        { borderColor, backgroundColor },
        error ? { borderColor: Colors.defaultColor.danger } : undefined,
        focused(),
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
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholderTextColor={error ? Colors.defaultColor.danger : placeholderColor}
          spellCheck={false}
          style={[
            { color },
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
    verticalAlign    : "middle",
  },
  focused: {
    borderColor: Colors.defaultColor.primary
  },
  focused2: {
    borderColor: Colors.dark.text
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
    color    : Colors.defaultColor.danger,
    textAlign: "right",
    marginTop: 6
  },
  invis: {
    opacity: 0
  }
});
