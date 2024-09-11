import React from "react";
import Svg, { Path } from "react-native-svg";

const ShopBags = ({
  size = 150,
}: {
  size?: number;
}) => {
  return (
    <Svg  fill="none" height={size} viewBox="0 0 150 150" width={size}>
      <Path d="M46.8 80.13C14.19 68.025 13.8 34.545 13.8 34.545C41.835 42.945 46.8 80.13 46.8 80.13Z" fill="#2D317C"/>
      <Path d="M13.785 34.545L46.785 80.13C14.175 68.01 13.785 34.545 13.785 34.545Z" fill="#505FAB"/>
      <Path d="M55.755 78.555C22.89 89.955 1.28998 64.365 1.28998 64.365C28.29 53.01 55.755 78.555 55.755 78.555Z" fill="#2D317C"/>
      <Path d="M1.28998 64.365L55.755 78.57C22.89 89.955 1.28998 64.365 1.28998 64.365Z" fill="#505FAB"/>
      <Path d="M49.155 84.45C25.905 58.575 41.1 28.755 41.1 28.755C62.04 49.23 49.155 84.45 49.155 84.45Z" fill="#2D317C"/>
      <Path d="M41.1 28.755L49.155 84.45C25.905 58.575 41.1 28.755 41.1 28.755Z" fill="#505FAB"/>
      <Path d="M114.405 99.09C117.885 76.14 139.695 71.34 139.695 71.34C138.015 90.795 114.405 99.09 114.405 99.09Z" fill="#4C6BB3"/>
      <Path d="M139.695 71.325L114.405 99.075C117.885 76.14 139.695 71.325 139.695 71.325Z" fill="#2D317C"/>
      <Path d="M116.64 103.305C104.73 83.385 118.515 65.805 118.515 65.805C129.6 81.9 116.64 103.305 116.64 103.305Z" fill="#4C6BB3"/>
      <Path d="M118.53 65.805L116.655 103.305C104.745 83.385 118.53 65.805 118.53 65.805Z" fill="#2D317C"/>
      <Path d="M111.9 101.22C125.64 82.515 147.195 88.395 147.195 88.395C136.665 104.85 111.9 101.22 111.9 101.22Z" fill="#4C6BB3"/>
      <Path d="M147.195 88.395L111.9 101.22C125.64 82.515 147.195 88.395 147.195 88.395Z" fill="#2D317C"/>
      <Path d="M137.265 53.175C134.505 54.09 132.315 56.265 131.4 59.04C130.485 56.28 128.31 54.09 125.535 53.175C128.295 52.26 130.485 50.085 131.4 47.31C132.315 50.085 134.49 52.275 137.265 53.175Z" fill="#2D317C"/>
      <Path d="M129.33 63.825C128.16 64.215 127.245 65.13 126.855 66.3C126.465 65.13 125.55 64.215 124.38 63.825C125.55 63.435 126.465 62.52 126.855 61.35C127.245 62.52 128.16 63.435 129.33 63.825Z" fill="#2D317C"/>
      <Path d="M12.735 87.255C15.495 88.17 17.685 90.345 18.6 93.12C19.515 90.36 21.69 88.17 24.465 87.255C21.705 86.34 19.515 84.165 18.6 81.39C17.685 84.165 15.495 86.355 12.735 87.255Z" fill="#2D317C"/>
      <Path d="M20.67 97.905C21.84 98.295 22.755 99.21 23.145 100.38C23.535 99.21 24.45 98.295 25.62 97.905C24.45 97.515 23.535 96.6 23.145 95.43C22.755 96.6 21.825 97.515 20.67 97.905Z" fill="#2D317C"/>
      <Path d="M126.3 84.45H96.345V112.68H126.3V84.45Z" fill="#FBAB24"/>
      <Path d="M114.3 84.45H108.345V112.68H114.3V84.45Z" fill="#DF9026"/>
      <Path d="M126.3 106.65V112.665H96.345V84.45H98.385C98.295 88.89 99.345 97.785 108.345 102.825C110.04 103.77 112.005 104.58 114.3 105.195C117.075 105.945 120.33 106.425 124.14 106.515L126.3 106.65Z" fill="#DF9026" opacity="0.59"/>
      <Path d="M123.75 88.305H116.385V95.955H123.75V88.305Z" fill="white"/>
      <Path d="M116.955 56.4H87V84.63H116.955V56.4Z" fill="#FBAB24"/>
      <Path d="M104.955 56.4H99V84.63H104.955V56.4Z" fill="#DF9026"/>
      <Path d="M116.955 78.615V84.63H87V56.4H89.04C88.95 60.84 90 69.735 99 74.775C100.695 75.72 102.66 76.53 104.955 77.145C107.73 77.895 110.985 78.375 114.795 78.465L116.955 78.615Z" fill="#DF9026" opacity="0.59"/>
      <Path d="M114.405 60.27H107.04V67.92H114.405V60.27Z" fill="white"/>
      <Path d="M67.845 45.99C67.395 42.6 65.22 38.895 61.335 39.09C57.63 39.285 55.41 42.78 54.525 46.005C53.94 48.105 53.685 50.31 53.445 52.485C53.19 54.81 52.935 57.27 53.625 59.535C53.835 60.21 54.795 60.21 55.005 59.535C56.025 56.22 55.785 52.515 56.385 49.095C56.865 46.35 57.765 42.3 61.02 41.67C64.815 40.935 65.475 46.095 65.55 48.675C65.655 52.215 65.22 55.695 65.07 59.22C65.025 60.285 66.6 60.45 66.885 59.46C68.175 55.29 68.415 50.31 67.845 45.99Z" fill="#E6E6E5"/>
      <Path d="M79.29 52.26H31.695V112.065H79.29V52.26Z" fill="#C3D0EB"/>
      <Path d="M79.275 52.26H69.63V112.065H79.275V52.26Z" fill="#84A7D8"/>
      <Path d="M59.805 45.99C59.355 42.6 57.18 38.895 53.295 39.09C49.59 39.285 47.37 42.78 46.485 46.005C45.9 48.105 45.645 50.31 45.405 52.485C45.15 54.81 44.895 57.27 45.585 59.535C45.795 60.21 46.755 60.21 46.965 59.535C47.985 56.22 47.745 52.515 48.345 49.095C48.825 46.35 49.725 42.3 52.98 41.67C56.775 40.935 57.435 46.095 57.51 48.675C57.615 52.215 57.18 55.695 57.03 59.22C56.985 60.285 58.56 60.45 58.845 59.46C60.135 55.29 60.375 50.31 59.805 45.99Z" fill="white"/>
      <Path d="M79.275 103.08V112.065H31.695V52.26H34.53C34.875 65.61 39.015 101.94 69.645 103.62C72.6 103.785 75.81 103.62 79.275 103.08Z" fill="#84A7D8" opacity="0.3"/>
      <Path d="M87.78 74.28C87.33 70.89 85.155 67.185 81.27 67.38C77.565 67.575 75.345 71.07 74.46 74.295C73.875 76.395 73.62 78.6 73.38 80.775C73.125 83.1 72.87 85.56 73.56 87.825C73.77 88.5 74.73 88.5 74.94 87.825C75.96 84.51 75.72 80.805 76.32 77.385C76.8 74.64 77.7 70.59 80.955 69.96C84.75 69.225 85.41 74.385 85.485 76.965C85.59 80.505 85.155 83.985 85.005 87.51C84.96 88.575 86.535 88.74 86.82 87.75C88.11 83.58 88.35 78.6 87.78 74.28Z" fill="#E6E6E5"/>
      <Path d="M99.225 80.55H51.63V114.96H99.225V80.55Z" fill="#F15F22"/>
      <Path d="M99.21 80.55H89.565V114.96H99.21V80.55Z" fill="#E24F25"/>
      <Path d="M79.74 74.28C79.29 70.89 77.115 67.185 73.23 67.38C69.525 67.575 67.305 71.07 66.42 74.295C65.835 76.395 65.58 78.6 65.34 80.775C65.085 83.1 64.83 85.56 65.52 87.825C65.73 88.5 66.69 88.5 66.9 87.825C67.92 84.51 67.68 80.805 68.28 77.385C68.76 74.64 69.66 70.59 72.915 69.96C76.71 69.225 77.37 74.385 77.445 76.965C77.55 80.505 77.115 83.985 76.965 87.51C76.92 88.575 78.495 88.74 78.78 87.75C80.07 83.58 80.31 78.6 79.74 74.28Z" fill="white"/>
      <Path d="M99.21 107.1V114.96H51.63V80.55H56.4C56.835 91.5 61.665 110.49 89.58 108.465C92.52 108.27 95.73 107.82 99.21 107.1Z" fill="#E24F25" opacity="0.56"/>
    </Svg>
  );
};

export { ShopBags };
