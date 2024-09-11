/* eslint-disable no-unused-vars */
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
export enum NavigationRoutes {
  RootStackParamList = "RootStackParamList",
  Root = "Root",

  // Tabs
  HomeTab = "HomeTab",
  ProfileTab = "ProfileTab",
  MapTab = "MapTab",
  MarketTab = "MarketTab",
  CouponTab = "CouponTab",

  //   Sheets
  // Screen
  LoginScreen = "LoginScreen",
  RegisterPhoneScreen = "RegisterPhoneScreen",
  OtpVerifyScreen = "OtpVerifyScreen",
  CreateProfileScreen = "CreateProfileScreen",
  PasswordScreen = "PasswordScreen",
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  LoginScreen: undefined;
  RegisterPhoneScreen: undefined;
  OtpVerifyScreen: undefined;
  CreateProfileScreen: undefined;
  PasswordScreen: undefined
};

export type BottomTabParamList = {
  HomeTab: undefined;
  ProfileTab: undefined;

};

export type BottomSheetParamList = {
  RootStackParamList: undefined;
  // SelectSheet: {
  //   values: {
  //     label: string;
  //     value: string;
  //   }[];
  //   onChange: (...event: any[]) => void
  // };
 
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> =
  NativeStackScreenProps<BottomSheetParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
    interface RootParamList extends BottomSheetParamList { }
  }
}
