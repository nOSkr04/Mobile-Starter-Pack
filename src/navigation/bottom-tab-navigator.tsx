/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes } from "./types";
import { HomeTab } from "../tabs/home";
import { ProfileTab } from "../tabs/profile";
import { TabBarAnimation } from "../components/animation/tab-bar-animation";
import { CouponTab } from "../tabs/coupon";
import { MapTab } from "../tabs/map";
import { MarketTab } from "../tabs/market";
import { HomeIcon } from "../assets/icons/home";
import { Colors } from "../constants/colors";
import { CouponIcon } from "../assets/icons/coupon";
import { LogoIcon } from "../assets/icons/logo";
import { MapIcon } from "../assets/icons/map";
import { MarketIcon } from "../assets/icons/market";
const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {


  return (
    <Tab.Navigator
      initialRouteName={NavigationRoutes.HomeTab}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBarAnimation {...props} />}
    >
      <Tab.Screen
        component={HomeTab}
        name={NavigationRoutes.HomeTab}
        options={{
          tabBarIcon: (props: any) => {
            return <HomeIcon color={props.active ? Colors.defaultColor.white : Colors.defaultColor.black} />;
          }, headerShown: false
        }}
      />
      <Tab.Screen
        component={CouponTab}
        name={NavigationRoutes.CouponTab}
        options={{ tabBarIcon: (props: any) => <CouponIcon color={props.active ? Colors.defaultColor.white : Colors.defaultColor.black} />, headerShown: false }}
      />
      <Tab.Screen
        component={ProfileTab}
        name={NavigationRoutes.ProfileTab}
        options={{ tabBarIcon: (props: any) => <LogoIcon color={props.active ? Colors.defaultColor.white : Colors.defaultColor.black} size={28} />, headerShown: false }}
      />

      <Tab.Screen
        component={MapTab}
        name={NavigationRoutes.MapTab}
        options={{ tabBarIcon: (props: any) => <MapIcon color={props.active ? Colors.defaultColor.white : Colors.defaultColor.black} />, headerShown: false }}
      />
      <Tab.Screen
        component={MarketTab}
        name={NavigationRoutes.MarketTab}
        options={{ tabBarIcon: (props: any) => <MarketIcon color={props.active ? Colors.defaultColor.white : Colors.defaultColor.black} />, headerShown: false }}
      />

    </Tab.Navigator>
  );
};

export { BottomTabsNavigator };

