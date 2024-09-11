import { KeyboardAvoidingView, Platform, StyleSheet, } from "react-native";
import React, { memo, useCallback, useState } from "react";
import { ThemedBackButton } from "../../components/widgets/theme-back-button";
import { ThemedAppBar } from "../../components/widgets/themed-app-bar";
import { ScrollView } from "../../components/widgets/themed-scrollview";
import { ThemedLogo } from "../../components/widgets/themed-logo";
import { View } from "../../components/widgets/themed-view";
import { Text } from "../../components/widgets/themed-text";
import {  OtpForm } from "../../components/auth/otp-form";
import { useNavigation } from "@react-navigation/native";
import { useForm,  } from "react-hook-form";
import { NavigationRoutes } from "../../navigation/types";

const OtpVerifyScreen = memo(() => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useForm();


  const onSubmit= useCallback(async (data:any) => {
    setLoading(true);
    setError("root", { "message": "" });
    console.log(data);
    setLoading(false);
    navigation.navigate(NavigationRoutes.CreateProfileScreen);
  }, [navigation, setError]);

  console.log(loading);
  return (
    <>
      <ThemedAppBar left={<ThemedBackButton />} midText="Баталгаажуулалт" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ScrollView keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled" style={styles.container}  >
          <View style={styles.midLogo}>
            <ThemedLogo size={80} />
          </View>
          <Text size={20} style={styles.title} type="SemiBold">Дугаар баталгаажуулалт</Text>
          <View style={styles.h8} />
          <Text style={styles.title}>Таны 9988**** дугаар луу илгээсэн 6 оронтой
            тоог оруулна уу.</Text>
          <View style={styles.h32} />
          <OtpForm control={control} errors={errors} onSubmit={handleSubmit(onSubmit)}  />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
});

OtpVerifyScreen.displayName="OtpVerifyScreen";

export { OtpVerifyScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  midLogo: {
    alignSelf     : "center",
    marginVertical: 32,
  },
  title: {
    textAlign       : "center",
    marginHorizontal: 55
  },
  h8: {
    height: 8
  },
  h32: {
    height: 32
  },
});