import { StyleSheet, } from "react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { View } from "../widgets/themed-view";
import { OtpInput } from "../widgets/themed-otp-input";
import { Text } from "../widgets/themed-text";

export type IOtpForm = {
  otp: string;
};

type Props = {
  control: Control<FieldValues>;
  errors: FieldErrors<IOtpForm>;
  onSubmit: any
};

const OtpForm = memo(({ control, errors,onSubmit }: Props) => {
  const [timeLeft, setTimeLeft] = useState(120);

  const onCheck = useCallback((otp: string, ) => {
    if(otp.length === 6){
      onSubmit();
    }
  },[onSubmit]);
  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);
  const resetTimer = () => {
    if(timeLeft === 0){
      return setTimeLeft(120);
    }
    return;
  };
  const formatTime = (seconds: number) => {
    if(seconds === 0){
      return "Дахин илгээх";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <View style={styles.root}>
      <Text>Баталгаажуулах код</Text>
      <View style={styles.h4}  />
      <Controller
        control={control}
        name="otp"
        render={({ field: { onChange, value, } }) => (
          <OtpInput 
         digits={6}
         error={errors.otp?.message}
         onChange={onChange}
         onSubmit={onCheck}
         value={value}
         />
        )}
        rules={{ required: "Заавал оруулна уу" }}
      />
      <View style={styles.h32}  />
      <Text onPress={resetTimer} size={16} style={styles.button} type="Medium" >{formatTime(timeLeft)}</Text>
    </View>
  );
});

OtpForm.displayName = "OtpForm";

export { OtpForm };

const styles = StyleSheet.create({
  root: {
    flex            : 1,
    marginHorizontal: 16
  },
  h4: {
    height: 4
  },
  h32: {
    height: 32
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical  : 6,
    textAlign        : "center"
  }
});