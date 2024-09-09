/* eslint-disable no-unused-vars */
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
export enum NavigationRoutes {
  RootStackParamList = "RootStackParamList",
  Root = "Root",

  // Tabs
  HomeTab = "HomeTab",
  ProfileTab = "ProfileTab",

  //   Sheets
  TestSheet = "TestSheet",
  // Screen
  TestScreen = "TestScreen",

}

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  TestScreen: undefined;

};

export type BottomTabParamList = {
  HomeTab: undefined;
  AuthTab: undefined;
  BasketTab: undefined;
  ChatTab: undefined;
  ReelTab: undefined;
  OtpTab: undefined;
  ProfileTab: undefined;
  OrderProductTab: undefined;
};

export type BottomSheetParamList = {
  RootStackParamList: undefined;
  TestSheet: undefined;

};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> =
  NativeStackScreenProps<BottomSheetParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends BottomSheetParamList {}
  }
}
