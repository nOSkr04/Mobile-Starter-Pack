import { KeyboardAvoidingView, Platform, StyleSheet, } from "react-native";
import React, { memo, useCallback, useState, } from "react";
import { ThemedBackButton } from "../../components/widgets/theme-back-button";
import { ScrollView } from "../../components/widgets/themed-scrollview";
import { ThemedAppBar } from "../../components/widgets/themed-app-bar";
import { View } from "../../components/widgets/themed-view";
import { ThemedLogo } from "../../components/widgets/themed-logo";
import { Text } from "../../components/widgets/themed-text";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { PhoneForm } from "../../components/auth/phone-form";
import Button from "../../components/widgets/themed-button";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoutes } from "../../navigation/types";

const RegisterPhoneScreen = memo(() => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useForm();


  const onSubmit: SubmitHandler<FieldValues> = useCallback(async (data) => {
    setLoading(true);
    setError("root", { "message": "" });
    console.log(data);
    setLoading(false);
    navigation.navigate(NavigationRoutes.OtpVerifyScreen);
  }, [navigation, setError]);
  return (
    <>
      <ThemedAppBar left={<ThemedBackButton />} midText="Бүртгүүлэх" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ScrollView keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled" style={styles.container}  >
          <View style={styles.midLogo}>
            <ThemedLogo size={80} />
          </View>
          <Text size={20} style={styles.title} type="SemiBold">Хаяг үүсгэх</Text>
          <View style={styles.h8} />
          <Text style={styles.title}>Та өөрийн утасны дугаарыг оруулж бүртгэл үүсгэнэ үү</Text>
          <View style={styles.h32} />
          <PhoneForm control={control} errors={errors} />
        </ScrollView>
        <Button label="Бүртгүүлэх" loading={loading} onPress={handleSubmit(onSubmit)} style={styles.button} />
      </KeyboardAvoidingView>
    </>
  );
});

RegisterPhoneScreen.displayName = "RegisterPhoneScreen";

export { RegisterPhoneScreen };

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
    marginHorizontal: 90
  },
  h8: {
    height: 8
  },
  h32: {
    height: 32
  },
  button: {
    marginHorizontal: 16,
    marginBottom    : 16
  }
});