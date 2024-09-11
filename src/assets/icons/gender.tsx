import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const GenderIcon = ({
  color = Colors.defaultColor.primary,
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 25" width={size} >
      <Path d="M8 23.5698C11.3137 23.5698 14 20.8835 14 17.5698C14 14.2561 11.3137 11.5698 8 11.5698C4.68629 11.5698 2 14.2561 2 17.5698C2 20.8835 4.68629 23.5698 8 23.5698Z" stroke={color} stroke-width="2"/>
      <Path d="M21.8432 3.72659H23C23 3.08773 22.4821 2.56982 21.8432 2.56982V3.72659ZM20.6865 11.4383C20.6865 12.0772 21.2044 12.5951 21.8432 12.5951C22.4821 12.5951 23 12.0772 23 11.4383H20.6865ZM14.1314 2.56982C13.4926 2.56982 12.9747 3.08773 12.9747 3.72659C12.9747 4.36544 13.4926 4.88335 14.1314 4.88335V2.56982ZM12.6358 14.5698L22.6611 4.54454L21.0253 2.90863L11 12.9339L12.6358 14.5698ZM20.6865 3.72659V11.4383H23V3.72659H20.6865ZM14.1314 4.88335H21.8432V2.56982H14.1314V4.88335Z" fill={color}/>
    </Svg>
  );
};

export { GenderIcon };
