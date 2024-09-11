import { StyleSheet,  View, useColorScheme } from "react-native";
import React, { memo,  } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { TextInput } from "../widgets/themed-textinput";
import { PhoneIcon } from "../../assets/icons/phone";
import { Colors } from "../../constants/colors";

export type IPhoneForm = {
  phone: string;
};

type Props = {
  control: Control<FieldValues>;
  errors: FieldErrors<IPhoneForm>;
};

const PhoneForm = memo(({ control, errors,  }: Props) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.root}>
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value, } }) => (
          <TextInput
            error={errors.phone?.message}
            keyboardType="phone-pad"
            label="Утас"
            onChangeText={onChange}
            placeholder="Утасны дугаар"
            prefix={<PhoneIcon color={errors.phone?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
    </View>
  );
});

PhoneForm.displayName = "PhoneForm";

export { PhoneForm };

const styles = StyleSheet.create({
  root: {
    flex            : 1,
    marginHorizontal: 16
  },

});