import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const AtIcon = ({
  color = Colors.defaultColor.primary,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 25" width={size} >
      <Path d="M17.4009 20.5139C15.8965 21.6441 14.0265 22.3139 12 22.3139C7.02944 22.3139 3 18.2845 3 13.3139C3 8.34334 7.02944 4.3139 12 4.3139C16.9706 4.3139 21 8.34334 21 13.3139V14.8139C21 16.1946 19.8807 17.3139 18.5 17.3139C17.1193 17.3139 16 16.1946 16 14.8139V9.3139M16 13.3139C16 15.523 14.2091 17.3139 12 17.3139C9.79086 17.3139 8 15.523 8 13.3139C8 11.1048 9.79086 9.3139 12 9.3139C14.2091 9.3139 16 11.1048 16 13.3139Z" id="Vector" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </Svg>
  );
};

export { AtIcon };
