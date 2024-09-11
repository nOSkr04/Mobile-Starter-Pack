import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const RightArrowIcon = ({
  color = Colors.defaultColor.black,
  size = 28,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 28 28" width={size} >
      <Path d="M17.5 21L10.5 14L17.5 7" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </Svg>
  );
};

export { RightArrowIcon };
