import { StyleSheet, TouchableOpacity, View, useColorScheme } from "react-native";
import React, { memo, useState, } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { TextInput } from "../widgets/themed-textinput";
import { Colors } from "../../constants/colors";
import { LockIcon } from "../../assets/icons/lock";
import { EyeIcon } from "../../assets/icons/eye";

export type IPasswordForm = {
  password: string;
  cpassword: string;
};

type Props = {
  control: Control<FieldValues>;
  errors: FieldErrors<IPasswordForm>;
};

const PasswordForm = memo(({ control, errors, }: Props) => {
  const colorScheme = useColorScheme();
  const [secure, setSecure] = useState(true);
  const [secure2, setSecure2] = useState(true);
  return (
    <View style={styles.root}>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value, } }) => (
          <TextInput
            error={errors.password?.message}
            label="Нууц үг"
            onChangeText={onChange}
            placeholder="Нууц үг"
            prefix={<LockIcon color={errors.password?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
            secureTextEntry={secure}
            suffix={<TouchableOpacity onPress={() => setSecure(!secure)} ><EyeIcon color={errors.password?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} /></TouchableOpacity>}
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <Controller
        control={control}
        name="cpassword"
        render={({ field: { onChange, value, } }) => (
          <TextInput
            error={errors.cpassword?.message}
            label="Нууц үг давтах"
            onChangeText={onChange}
            placeholder="Нууц үг"
            prefix={<LockIcon color={errors.cpassword?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
            secureTextEntry={secure2}
            suffix={<TouchableOpacity onPress={() => setSecure2(!secure2)} ><EyeIcon color={errors.cpassword?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} /></TouchableOpacity>}
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
    </View>
  );
});

PasswordForm.displayName = "PasswordForm";

export { PasswordForm };

const styles = StyleSheet.create({
  root: {
    flex            : 1,
    marginHorizontal: 16
  },

});