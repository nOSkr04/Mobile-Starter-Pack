import {  useColorScheme } from "react-native";
import React, { memo } from "react";
import { LogoIcon } from "../../assets/icons/logo";

const ThemedLogo = memo(({ size }: {size?: number}) => {
    const colorScheme = useColorScheme();

    return (
      <LogoIcon  color={colorScheme === "dark" ? "white" : undefined} size={size}  />
    );
  });

  ThemedLogo.displayName="ThemedLogo";

export { ThemedLogo };
