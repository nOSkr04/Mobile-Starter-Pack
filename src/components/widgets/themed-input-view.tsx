import { StyleSheet, TouchableOpacity, } from "react-native";
import React, { memo, } from "react";
import { View } from "./themed-view";
import { Text } from "./themed-text";
import { useThemeColor } from "../../hooks/useThemeColor";
import { Colors } from "../../constants/colors";

type Props = {
  value?: string;
  error?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onPress: () => void;
}

const InputView = memo(({ value, error, prefix, suffix, label, onPress }: Props) => {
  const borderColor = useThemeColor({}, "border");
  const backgroundColor = useThemeColor({}, "textinput");
  return (
    <>
      <Text>{label}</Text>
      <View style={styles.h6} />
      <TouchableOpacity onPress={onPress} style={[{ borderColor, backgroundColor }, styles.container]}>
        <View style={styles.content}>
          {prefix ?
            prefix
            : null
          }
          <Text size={16} type="Medium">{value}</Text>
        </View>
        {suffix ?
          suffix
          :
          null
        }
      </TouchableOpacity>
      <Text size={14} style={[styles.error, !error && styles.invis]}>{error || "error"}</Text>
    </>
  );
});

InputView.displayName = "InputView";

export { InputView };

const styles = StyleSheet.create({
  container: {
    flexDirection    : "row",
    alignItems       : "center",
    justifyContent   : "space-between",
    borderWidth      : 1,
    paddingVertical  : 13,
    paddingHorizontal: 16,
    borderRadius     : 12
  },
  h6: {
    height: 6
  },
  content: {
    flexDirection  : "row",
    alignItems     : "center",
    gap            : 12,
    backgroundColor: Colors.defaultColor.transparent
  },
  error: {
    color    : Colors.defaultColor.danger,
    textAlign: "right",
    marginTop: 6
  },
  invis: {
    opacity: 0
  }
});