import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes } from "./types";
import { HomeTab } from "../tabs/home";
import { ProfileTab } from "../tabs/profile";
const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  

  return (
    <Tab.Navigator
      initialRouteName={NavigationRoutes.HomeTab}
      screenOptions={{
        headerShown: false,
      }}

    >
      <Tab.Screen
        component={HomeTab}
        name={NavigationRoutes.HomeTab}
      />
      <Tab.Screen
        component={ProfileTab}
        name={NavigationRoutes.ProfileTab}
        
      />
      
    </Tab.Navigator>
  );
};

export { BottomTabsNavigator };

