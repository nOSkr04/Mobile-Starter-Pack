import {  StyleSheet,  } from "react-native";
import React, { memo, useCallback } from "react";
import { View } from "../widgets/themed-view";
import { Text } from "../widgets/themed-text";
import Modal  from "react-native-modal";
import { ShopBags } from "../../assets/icons/shop-bags";
import Button from "../widgets/themed-button";
type Props ={
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean
}

const AuthCompleteModal = memo(({
  modalVisible,
  setModalVisible
}: Props) => {
  const onConfirm = useCallback(() => {
    setModalVisible(!modalVisible);

  },[modalVisible, setModalVisible]);
  return (
    <Modal isVisible={modalVisible}>
      <View style={styles.root} >
        <ShopBags/>
        <View >
          <Text size={16} style={styles.title} type="SemiBold">BISHRELT LOYALTY CLUB-д нэгдсэн таньд баяр хүрэгье!</Text>
          <View style={styles.h12}  />
          <Text style={styles.title}>Таныг хүлээж байгаа гайхамшигт хөнгөлөлт, онцгой санал, хосгүй давуу талуудаар дүүрэн аялалдаа хамтдаа гарцгаая.</Text>
          <View style={styles.h12}  />
          <View style={styles.h12}  />
          <Button label="Үргэлжлүүлэх" onPress={onConfirm} style={styles.flex} />
        </View>
      </View>
    </Modal>
  );
});

AuthCompleteModal.displayName="AuthCompleteModal";

export { AuthCompleteModal };

const styles = StyleSheet.create({
  root: {
    alignItems    : "center",
    justifyContent: "center",
    borderRadius  : 16,
    padding       : 24,
  },
  title: {
    textAlign: "center",
  },
  h12: {
    height: 12
  },
  flex: {
  }
});