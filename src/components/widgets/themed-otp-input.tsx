import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import OtpTextInput from "react-native-text-input-otp";
import { useThemeColor } from "../../hooks/useThemeColor";
import { Colors } from "../../constants/colors";

type OtpInputProps = {
  value?: string;
  onChange?: any;
  digits: number;
  onSubmit?: any;
  error?: string
};

const OtpInput = ({ value, onChange, digits, onSubmit }: OtpInputProps) => {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, "textinput");
  const borderColor = useThemeColor({}, "border");
  const textColor = useThemeColor({}, "text");
  const focused= colorScheme === "dark" ? Colors.defaultColor.white : Colors.defaultColor.primary;
  const style = {
    height        : 58,
    alignItems    : "center",
    justifyContent: "center",
    borderRadius  : 12,
    borderColor,
    backgroundColor
  };
  return <OtpTextInput
    digits={digits}
    focusedStyle={{ borderColor: focused,  }}
    // fontStyle={{ fontSize: 20, fontWeight: "bold" }}
    fontStyle={[{ color: textColor }, styles.title]}
    otp={value ? value : ""}
    setOtp={(e: any) => { onChange(e); onSubmit(e); }}
    style={style}
  />;
};

export { OtpInput };

const styles = StyleSheet.create({

  title: {
    fontFamily: "Medium",
    fontSize  : 22,
    
  }
});
