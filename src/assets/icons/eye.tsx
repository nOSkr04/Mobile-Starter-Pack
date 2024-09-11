import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const EyeIcon = ({
  color = Colors.defaultColor.primary,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 25" width={size} >
      <Path d="M3.27489 15.7258C2.42496 14.6216 2 14.0695 2 12.4301C2 10.7907 2.42496 10.2386 3.27489 9.13441C4.97196 6.92964 7.81811 4.43008 12 4.43008C16.1819 4.43008 19.028 6.92964 20.7251 9.13441C21.575 10.2386 22 10.7907 22 12.4301C22 14.0695 21.575 14.6216 20.7251 15.7258C19.028 17.9305 16.1819 20.4301 12 20.4301C7.81811 20.4301 4.97196 17.9305 3.27489 15.7258Z" stroke={color} stroke-width="2"/>
      <Path d="M15 12.4301C15 14.087 13.6569 15.4301 12 15.4301C10.3431 15.4301 9 14.087 9 12.4301C9 10.7732 10.3431 9.43008 12 9.43008C13.6569 9.43008 15 10.7732 15 12.4301Z" stroke={color} stroke-width="2"/>
    </Svg>

  );
};

export { EyeIcon };
