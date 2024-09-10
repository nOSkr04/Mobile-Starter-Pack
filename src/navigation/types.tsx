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
  LoginScreen = "LoginScreen"

}

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  TestScreen: undefined;
  LoginScreen: undefined
};

export type BottomTabParamList = {
  HomeTab: undefined;
  ProfileTab: undefined;

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
