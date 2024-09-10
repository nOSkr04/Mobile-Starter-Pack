import { Text as DefaultText, StyleSheet, type TextProps } from "react-native";
import React from "react";
import { useThemeColor } from "../../hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "Regular" | "Medium" | "SemiBold" | "Bold" | "ExtraBold";
  size?: number;
  lineHeight?: number;
};

const Text = ({
  style,
  lightColor,
  darkColor,
  type = "Regular",
  size = 14,
  lineHeight,
  ...rest
}: ThemedTextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const sizes =  size ? { fontSize: size } : undefined;
  const lineHeights = lineHeight ? { lineHeight: lineHeight } : undefined;

  return (
    <DefaultText
      style={[
        { color, },
        sizes,
        lineHeights,
        type === "Regular" ? styles.regular : undefined,
        type === "Medium" ? styles.medium : undefined,
        type === "SemiBold" ? styles.semibold : undefined,
        type === "Bold" ? styles.bold : undefined,
        type === "ExtraBold" ? styles.extraBold : undefined,
        style,
      ]}
      {...rest}
    />
  );
};


export { Text };

const styles = StyleSheet.create({
  regular: {
    fontFamily: "Regular"
  },
  medium: {
    fontFamily: "Medium"
  },
  semibold: {
    fontFamily: "SemiBold"
  },
  bold: {
    fontFamily: "Bold"
  },
  extraBold: {
    fontFamily: "ExtraBold"
  }

});
