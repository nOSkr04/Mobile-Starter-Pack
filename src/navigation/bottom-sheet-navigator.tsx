import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import { BottomSheetParamList, NavigationRoutes } from "./types";
import React from "react";
import { SheetBackdrop } from "../components/sheets/back-drop";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackNavigator } from "./root-stack-navigator";
import { TestSheet } from "../sheets/test";

const BottomSheet = createBottomSheetNavigator<BottomSheetParamList>();

const { Navigator, Screen } = BottomSheet;

const BottomSheetNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Navigator>
      <Screen
        component={RootStackNavigator}
        name={NavigationRoutes.RootStackParamList}
      />
      <Screen
        component={TestSheet}
        name={NavigationRoutes.TestSheet}
        options={{
          backdropComponent: SheetBackdrop,
          snapPoints       : ["90%"],
          index            : 1,
          topInset         : insets.top,
        }}
      />
    </Navigator>
  );
};

export { BottomSheetNavigator };
