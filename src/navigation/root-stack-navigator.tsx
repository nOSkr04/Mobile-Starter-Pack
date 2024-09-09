import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabsNavigator } from "./bottom-tab-navigator";
import { NavigationRoutes, RootStackParamList } from "./types";
import { TestScreen } from "../screens/test";

const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const RootStackNavigator = () => {
  const navigationOptions = () => {
    return { headerShown: false };
  };

  return (
    <Navigator
        initialRouteName={NavigationRoutes.Root}
        screenOptions={navigationOptions}
      >
      <Screen component={BottomTabsNavigator} name={NavigationRoutes.Root} />
      <Screen
          component={TestScreen}
          name={NavigationRoutes.TestScreen}
        />
    </Navigator>
  );
};

export { RootStackNavigator };
