import { ScrollView as DefaultScrollView, type ScrollViewProps } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import React from "react";

export type ThemedScrollViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const ScrollView = ({ style, lightColor, darkColor, ...otherProps }: ThemedScrollViewProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
};


export { ScrollView };
