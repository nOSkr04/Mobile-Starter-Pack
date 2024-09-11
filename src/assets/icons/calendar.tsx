import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const CalendarIcon = ({
  color = Colors.defaultColor.primary,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 25" width={size} >
      <Path d="M2 13.3139C2 9.54266 2 7.65705 3.17157 6.48547C4.34315 5.3139 6.22876 5.3139 10 5.3139H14C17.7712 5.3139 19.6569 5.3139 20.8284 6.48547C22 7.65705 22 9.54266 22 13.3139V15.3139C22 19.0851 22 20.9708 20.8284 22.1423C19.6569 23.3139 17.7712 23.3139 14 23.3139H10C6.22876 23.3139 4.34315 23.3139 3.17157 22.1423C2 20.9708 2 19.0851 2 15.3139V13.3139Z" id="Vector" stroke={color} stroke-width="2" />
      <Path d="M7 5.3139V3.8139" id="Vector_2" stroke={color} stroke-linecap="round" stroke-width="2" />
      <Path d="M17 5.3139V3.8139" id="Vector_3" stroke={color} stroke-linecap="round" stroke-width="2" />
      <Path d="M9 15.8139L10.5 14.3139V18.3139" id="Vector_4" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      <Path d="M13 17.3139V15.3139C13 14.7616 13.4477 14.3139 14 14.3139C14.5523 14.3139 15 14.7616 15 15.3139V17.3139C15 17.8662 14.5523 18.3139 14 18.3139C13.4477 18.3139 13 17.8662 13 17.3139Z" id="Vector_5" stroke={color} stroke-linecap="round" stroke-width="2" />
      <Path d="M2.5 10.3139H21.5" id="Vector_6" stroke={color} stroke-linecap="round" stroke-width="2" />
    </Svg>
  );
};

export { CalendarIcon };
