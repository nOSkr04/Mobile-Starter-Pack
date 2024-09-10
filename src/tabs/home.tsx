import React, { memo, useCallback } from "react";
import { Text } from "../components/widgets/themed-text";
import { ScrollView } from "../components/widgets/themed-scrollview";
import { TextInput } from "../components/widgets/themed-textinput";
import { PhoneIcon } from "../assets/icons/phone";
import { TouchableOpacity } from "react-native";
import { dangerColor } from "../constants/colors";
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
      <Text size={24} type="Regular">Regular</Text>
      <Text size={24} type="Medium"  >Medium</Text>
      <Text size={24} type="Bold"  >Bold</Text>
      <Text size={24} type="Bold"  >SemiBold</Text>
      <Text size={24} type="ExtraBold"  >Extra Bold</Text>
      <TextInput error={"error"} label="HI" placeholder="HI"  prefix={<PhoneIcon color={dangerColor}/>} suffix={<TouchableOpacity><PhoneIcon color={dangerColor} /></TouchableOpacity>} />
      <Text size={24} type="ExtraBold"  >Extra Bold</Text>
      <TextInput placeholder="HI" secureTextEntry />
      <Text size={24} type="ExtraBold"  >Extra Bold</Text>
      <TextInput placeholder="HI" secureTextEntry suffix />
      <Button onPress={onLogout}   />
    </ScrollView>
  );
});

HomeTab.displayName = "HomeTab";

export { HomeTab };

