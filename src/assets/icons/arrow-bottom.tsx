import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const ArrowBottomIcon = ({
  color = Colors.defaultColor.primary,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 25" width={size} >
      <Path d="M18 9.44188L12 15.4419L6 9.44188" id="Vector" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </Svg>
    
  );
};

export { ArrowBottomIcon };
