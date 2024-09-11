import { StyleSheet, useColorScheme, } from "react-native";
import React, { memo, useState } from "react";
import { View } from "../widgets/themed-view";
import { Controller, FieldErrors,  } from "react-hook-form";
import { TextInput } from "../widgets/themed-textinput";
import { Colors } from "../../constants/colors";
import { CalendarIcon } from "../../assets/icons/calendar";
import Button from "../widgets/themed-button";
import { SelectInput } from "../widgets/themed-select-input";
import { GenderIcon } from "../../assets/icons/gender";
import { ArrowBottomIcon } from "../../assets/icons/arrow-bottom";
import { UserIcon } from "../../assets/icons/user";
import { InputView } from "../widgets/themed-input-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";

export type IProfileForm = {
  lastName: string;
  firstName: string;
  gender: string;
  birthDate: string;
  email: string;
  reminder?: boolean;
};

type Props = {
  control: any;
  errors: FieldErrors<IProfileForm>;
  onSubmit: any;
  loading: boolean;
};

const ProfileForm = memo(({ control, errors, onSubmit, loading }: Props) => {
  const colorScheme = useColorScheme();
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  return (
    <View style={styles.root}>
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value, } }) => (
          <TextInput
            error={errors.lastName?.message}
            label="Овог"
            onChangeText={onChange}
            placeholder="Овог"
            prefix={<UserIcon color={errors.lastName?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value, } }) => (
          <TextInput
            error={errors.firstName?.message}
            label="Нэр"
            onChangeText={onChange}
            placeholder="Нэр"
            prefix={<UserIcon color={errors.firstName?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange, value, } }) => (
          <SelectInput
            error={errors.gender?.message}
            label="Хүйс"
            onChange={onChange}
            prefix={
              <GenderIcon
                color={colorScheme === "dark" ? Colors.defaultColor.white : Colors.defaultColor.primary}
              />
            }
            suffix={
              <ArrowBottomIcon
                color={colorScheme === "dark" ? Colors.defaultColor.white : Colors.defaultColor.primary}
              />
            }
            value={value === "MALE" ? "Эрэгтэй" : "Эмэгтэй"}
            values={
              [
                { label: "Эрэгтэй", value: "MALE" },
                { label: "Эмэгтэй", value: "FEMALE" },
            ]
            }
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, value, } }) => {
          return (
            <>
              <InputView
                label="Төрсөн огноо"
                onPress={() => setDatePickerVisible(!datePickerVisible)}
                prefix={<CalendarIcon color={colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
                value={format(new Date(value), "yyyy-MM-dd")}
              />
              <DateTimePickerModal
                date={new Date(value)}
                isVisible={datePickerVisible}
                mode="date"
                onCancel={() => setDatePickerVisible(false)}
                onConfirm={(date) => {
                  const formattedDate = date.toLocaleDateString("en-CA"); 
                  setDatePickerVisible(false);
                  onChange(formattedDate);
                }}
              />
            </>
          );
        }}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, } }) => (
          <TextInput
            error={errors.email?.message}
            label="И-мэйл"
            onChangeText={onChange}
            placeholder="И-мэйл"
            prefix={<CalendarIcon color={errors.email?.message ? Colors.defaultColor.danger : colorScheme === "dark" ? Colors.defaultColor.white : undefined} />}
            value={value}
          />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <Button label="Бүртгүүлэх" loading={loading} onPress={onSubmit} />
      <View style={styles.h50} />
    </View>
  );
});

ProfileForm.displayName = "ProfileForm";

export { ProfileForm };

const styles = StyleSheet.create({
  root: {
    flex            : 1,
    marginHorizontal: 16,
  },
  h50: {
    height: 50
  }
});