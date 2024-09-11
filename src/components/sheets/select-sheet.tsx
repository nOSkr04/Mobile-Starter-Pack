import { StyleSheet,  TouchableOpacity, } from "react-native";
import React, { memo, useCallback, useMemo,  } from "react";
import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import { SheetBackdrop } from "./back-drop";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useThemeColor } from "../../hooks/useThemeColor";
import { Text } from "../widgets/themed-text";
import { Colors } from "../../constants/colors";

type Props = {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  openModal: () => void;
  values: {
    label: string;
    value: string;
  }[];
  onChange: any;
  setSnapIndex: React.Dispatch<React.SetStateAction<number>>;
  snapIndex: number;
  snap?: number;
}

const SelectSheet = memo(({ bottomSheetModalRef, openModal, values, onChange, snapIndex, setSnapIndex, snap=200 }: Props) => {
  const snapPoints = useMemo(() => [snap], [snap]);
  const color = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setSnapIndex(-1);
  }, [bottomSheetModalRef, setSnapIndex]);

  const renderItem = useCallback(({ item }: { item: { value: string, label: string } }) => {
    return (
      <TouchableOpacity onPress={() => {
        onChange(item.value);
        closeModal();
      }} style={styles.container}>
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  }, [closeModal, onChange]);

  return (
    <BottomSheetModal
      backdropComponent={SheetBackdrop}
      backgroundStyle={{ backgroundColor }}
      enableDismissOnClose={true}
      enablePanDownToClose
      handleIndicatorStyle={{ backgroundColor: color }}
      handleStyle={[styles.topStyle]}
      index={snapIndex}
      onChange={openModal}
      onDismiss={closeModal}
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
    >
      <BottomSheetFlatList contentContainerStyle={styles.g8} data={values} keyExtractor={item => item.value} renderItem={renderItem} />
    </BottomSheetModal>
  );
});

SelectSheet.displayName = "SelectSheet";

export { SelectSheet };

const styles = StyleSheet.create({
  topStyle: {
    borderTopLeftRadius : 20,
    borderTopRightRadius: 20,
  },
  container: {
    marginHorizontal: 16,
    padding         : 16,
    borderWidth     : 1,
    borderRadius    : 12,
    borderColor     : Colors.light.border
  },
  g8: {
    gap: 8
  }
});