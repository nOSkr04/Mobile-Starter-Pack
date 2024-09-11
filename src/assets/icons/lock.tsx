import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const LockIcon = ({
  color = Colors.defaultColor.primary,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 25" width={size} >
      <Path d="M2 16.4301C2 13.6017 2 12.1875 2.87868 11.3088C3.75736 10.4301 5.17157 10.4301 8 10.4301H16C18.8284 10.4301 20.2426 10.4301 21.1213 11.3088C22 12.1875 22 13.6017 22 16.4301C22 19.2585 22 20.6727 21.1213 21.5514C20.2426 22.4301 18.8284 22.4301 16 22.4301H8C5.17157 22.4301 3.75736 22.4301 2.87868 21.5514C2 20.6727 2 19.2585 2 16.4301Z" stroke={color} stroke-width="2" />
      <Path d="M6 10.4301V8.43008C6 5.11637 8.68629 2.43008 12 2.43008C15.3137 2.43008 18 5.11637 18 8.43008V10.4301" stroke={color} stroke-linecap="round" stroke-width="2" />
      <Path d="M8 16.4301H8.009M11.991 16.4301H12M15.991 16.4301H16" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
    </Svg>

  );
};

export { LockIcon };
