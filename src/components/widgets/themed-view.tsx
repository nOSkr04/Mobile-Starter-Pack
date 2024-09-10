import { View as DefaultView, type ViewProps } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import React from "react";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const View = ({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export { View };
