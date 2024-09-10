import React from "react";
import Svg, { Path } from "react-native-svg";

const TickIcon = ({
  color = "white",
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <Svg  fill="none" height={size} viewBox="0 0 20 21" width={size}>
      <Path clipRule="evenodd" d="M15.8162 6.64506C16.0701 6.922 16.0597 7.36021 15.793 7.62383L8.08929 15.2392C7.95773 15.3693 7.78077 15.4379 7.59933 15.4294C7.41788 15.4208 7.24766 15.3357 7.12802 15.1938L4.16506 11.679C3.92254 11.3913 3.95052 10.9539 4.22755 10.7021C4.50459 10.4502 4.92577 10.4793 5.16829 10.767L7.67342 13.7387L14.8737 6.62095C15.1404 6.35733 15.5623 6.36812 15.8162 6.64506Z" fill={color} fillRule="evenodd"/>
    </Svg>
  );
};

export { TickIcon };
