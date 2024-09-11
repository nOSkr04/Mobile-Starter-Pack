import { StyleSheet, TouchableOpacity, } from "react-native";
import React, { memo, useCallback, useRef, useState } from "react";
import { View } from "./themed-view";
import { Text } from "./themed-text";
import { useThemeColor } from "../../hooks/useThemeColor";
import { Colors } from "../../constants/colors";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SelectSheet } from "../sheets/select-sheet";

type Props = {
  onChange: (...event: any[]) => void;
  value?: string;
  error?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  values: {
    label: string;
    value: string;
  }[]
}

const SelectInput = memo(({ value, onChange, error, prefix, suffix, label, values }: Props) => {
  const borderColor = useThemeColor({}, "border");
  const backgroundColor = useThemeColor({}, "textinput");
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [snapIndex, setSnapIndex] = useState(-1);
  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setSnapIndex(0);
  }, []);
  return (
    <>
      <Text>{label}</Text>
      <View style={styles.h6} />
      <TouchableOpacity onPress={openModal} style={[{ borderColor, backgroundColor }, styles.container]}>
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
      <SelectSheet
        bottomSheetModalRef={bottomSheetModalRef}
        onChange={onChange}
        openModal={openModal}
        setSnapIndex={setSnapIndex}
        snapIndex={snapIndex}
        values={values}
      />
    </>
  );
});

SelectInput.displayName = "SelectInput";

export { SelectInput };

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