import React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../constants/colors";

const CouponIcon = ({
  color = Colors.defaultColor.primary,
  size = 28,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg  fill="none" height={size} viewBox="0 0 29 28" width={size}>
      <Path d="M17.0891 4.66666H12.4108C8.0001 4.66666 5.79473 4.66666 4.42449 6.03349C3.48104 6.97459 3.18718 8.31061 3.09566 10.4877C3.0775 10.9195 3.06842 11.1353 3.14904 11.2793C3.22967 11.4234 3.55153 11.6031 4.19524 11.9626C4.91015 12.3619 5.39339 13.1246 5.39339 14C5.39339 14.8753 4.91015 15.6381 4.19524 16.0373C3.55153 16.3969 3.22967 16.5766 3.14904 16.7207C3.06842 16.8646 3.0775 17.0806 3.09566 17.5122C3.18718 19.6894 3.48104 21.0254 4.42449 21.9665C5.79473 23.3333 8.0001 23.3333 12.4108 23.3333H17.0891C21.4998 23.3333 23.7052 23.3333 25.0754 21.9665C26.0189 21.0254 26.3128 19.6894 26.4043 17.5122C26.4225 17.0806 26.4316 16.8646 26.351 16.7207C26.2703 16.5766 25.9485 16.3969 25.3047 16.0373C24.5898 15.6381 24.1065 14.8753 24.1065 14C24.1065 13.1246 24.5898 12.3619 25.3047 11.9626C25.9485 11.6031 26.2703 11.4234 26.351 11.2794C26.4316 11.1353 26.4225 10.9195 26.4043 10.4877C26.3128 8.31061 26.0189 6.97459 25.0754 6.03349C23.7052 4.66666 21.4998 4.66666 17.0891 4.66666Z" stroke={color} stroke-width="2"/>
      <Path d="M11.25 17.5L18.25 10.5" stroke={color} stroke-linecap="round" stroke-width="2"/>
      <Path d="M18.8333 16.9167C18.8333 17.561 18.311 18.0833 17.6667 18.0833C17.0223 18.0833 16.5 17.561 16.5 16.9167C16.5 16.2723 17.0223 15.75 17.6667 15.75C18.311 15.75 18.8333 16.2723 18.8333 16.9167Z" fill={color}/>
      <Path d="M13 11.0833C13 11.7277 12.4777 12.25 11.8334 12.25C11.189 12.25 10.6667 11.7277 10.6667 11.0833C10.6667 10.439 11.189 9.91666 11.8334 9.91666C12.4777 9.91666 13 10.439 13 11.0833Z" fill={color}/>
    </Svg>
  );
};

export { CouponIcon };
