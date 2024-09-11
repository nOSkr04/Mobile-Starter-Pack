import { StyleSheet, TouchableOpacity, View, useColorScheme } from "react-native";
import React, { memo, useState } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { TextInput } from "../widgets/themed-textinput";
import { Text } from "../widgets/themed-text";
import { PhoneIcon } from "../../assets/icons/phone";
import { LockIcon } from "../../assets/icons/lock";
import { EyeIcon } from "../../assets/icons/eye";
import CheckBox from "../widgets/themed-checkbox";
import Button from "../widgets/themed-button";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoutes } from "../../navigation/types";

export type ILoginForm = {
  username: string;
  password: string;
  reminder?: boolean;
};

type Props = {
  control: Control<FieldValues>;
  errors: FieldErrors<ILoginForm>;
  onSubmit: any;
  loading: boolean;
};

const LoginForm = memo(({ control, errors, onSubmit, loading }: Props) => {
  const [secure, setSecure] = useState(true);
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value, } }) => (
          <TextInput
            error={errors.username?.message}
            keyboardType="phone-pad"
            label="Утас"
            onChangeText={onChange}
            placeholder="Утасны дугаар"
            prefix={<PhoneIcon color={errors.username?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value, } }) => (
          <TextInput
            error={errors.password?.message}
            label="Нууц үг"
            onChangeText={onChange}
            placeholder="Нууц үг"
            prefix={<LockIcon color={errors.username?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
            secureTextEntry={secure}
            suffix={<TouchableOpacity onPress={() => setSecure(!secure)} ><EyeIcon color={errors.username?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} /></TouchableOpacity>}
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <View style={styles.h16} />
      <View style={styles.actionRoot}>
        <Controller
          control={control}
          name="reminder"
          render={({ field: { onChange, value } }) => (
            <TouchableOpacity onPress={() => onChange(!value)} style={styles.reminder}>
              <CheckBox checked={value} />
              <Text size={14}>Сануулах</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity>
          <Text darkColor={Colors.defaultColor.white} lightColor={Colors.defaultColor.primary} size={14} >Нууц үгээ мартсан ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.h32} />
      <Button label="Нэвтрэх" loading={loading} onPress={onSubmit} />
      <View style={styles.h16} />
      <Button label="Бүртгүүлэх" loading={loading} onPress={() => navigation.navigate(NavigationRoutes.RegisterPhoneScreen)} type="secondary" />
    </View>
  );
});

LoginForm.displayName = "LoginForm";

export { LoginForm };

const styles = StyleSheet.create({
  root: {
    flex            : 1,
    marginHorizontal: 16
  },
  h16: {
    height: 16
  },
  actionRoot: {
    flexDirection : "row",
    alignItems    : "center",
    justifyContent: "space-between",
  },
  reminder: {
    flexDirection: "row",
    gap          : 12,
    alignItems   : "center",
  },

  h32: {
    height: 32
  }
});