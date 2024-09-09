import * as React from "react";
import { NavigationContainer as RNNavigationContainer } from "@react-navigation/native";
import { BottomSheetNavigator } from "./bottom-sheet-navigator";
const NavigationContainer = () => {

  return (
    <RNNavigationContainer>
      <BottomSheetNavigator />
    </RNNavigationContainer>
  );
};

export { NavigationContainer };
