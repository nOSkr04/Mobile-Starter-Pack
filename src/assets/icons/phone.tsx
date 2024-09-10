import React from "react";
import Svg, { Path } from "react-native-svg";
import { primaryColor } from "../../constants/colors";

const PhoneIcon = ({
  color = primaryColor,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 24" width={size} >
      <Path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z" stroke={color} stroke-width="2" />
      <Path d="M15 19H9" stroke={color} stroke-linecap="round" stroke-width="2" />
    </Svg>
  );
};

export { PhoneIcon };
