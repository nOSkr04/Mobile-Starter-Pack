import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabsNavigator } from "./bottom-tab-navigator";
import { NavigationRoutes, RootStackParamList } from "./types";
import { TestScreen } from "../screens/test";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { IAuth } from "../interfaces/auth";
import { AuthApi } from "../api";
import { authLogout, authMe } from "../store/auth-slice";
import { LoginScreen } from "../screens/auth/login";
import { RegisterPhoneScreen } from "../screens/auth/register-phone";

const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const RootStackNavigator = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: { auth: IAuth }) => state.auth);


  const { data } = useSWR(["swr.user.me", token], async () => {
    const res = await AuthApi.me();
    return res;
  },
    {
      onSuccess: async (data) => {
        dispatch(authMe(data));
      },
      onError: async (err) => {
        if (err.error.code === 401) {
          dispatch(authLogout());
        }
      },
    }
  );

  const navigationOptions = () => {
    return { headerShown: false };
  };

  return (
    <Navigator
      initialRouteName={NavigationRoutes.Root}
      screenOptions={navigationOptions}
    >
      {data ? <>
        <Screen component={BottomTabsNavigator} name={NavigationRoutes.Root} />
        <Screen
        component={TestScreen}
        name={NavigationRoutes.TestScreen}
      />
      </>
    :
      <>
        <Screen component={LoginScreen} name={NavigationRoutes.LoginScreen} />
        <Screen component={RegisterPhoneScreen} name={NavigationRoutes.RegisterPhoneScreen} />
      </> 
    }
    </Navigator>
  );
};

export { RootStackNavigator };
