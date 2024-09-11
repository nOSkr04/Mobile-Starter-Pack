import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const UserIcon = ({
  color = Colors.defaultColor.primary,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 25" width={size}>
      <Path d="M12 11.314C14.2091 11.314 16 9.5231 16 7.31396C16 5.10483 14.2091 3.31396 12 3.31396C9.79086 3.31396 8 5.10483 8 7.31396C8 9.5231 9.79086 11.314 12 11.314Z" id="Vector" stroke={color}stroke-width="2"/>
      <Path d="M12 22.314C15.866 22.314 19 20.5231 19 18.314C19 16.1048 15.866 14.314 12 14.314C8.13401 14.314 5 16.1048 5 18.314C5 20.5231 8.13401 22.314 12 22.314Z" id="Vector_2" stroke={color}stroke-width="2"/>
    </Svg>


  );
};

export { UserIcon };
