import React, { memo, useCallback } from "react";
import { ScrollView } from "../components/widgets/themed-scrollview";
import { AuthApi } from "../api";
import { authLogout } from "../store/auth-slice";
import { useDispatch } from "react-redux";
import Button from "../components/widgets/themed-button";
const HomeTab = memo(() => {
  const dispatch = useDispatch();
  const onLogout = useCallback(async () => {
    try {
      await AuthApi.logout();
      dispatch(authLogout());
    } catch (err: any) {
      console.log(err);
    }
  }, [dispatch]);
  return (
    <ScrollView >
   
      <Button label="aaa"  onPress={onLogout}  />
    </ScrollView>
  );
});

HomeTab.displayName = "HomeTab";

export { HomeTab };

