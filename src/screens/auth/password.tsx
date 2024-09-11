import { KeyboardAvoidingView, Platform, StyleSheet, useColorScheme, } from "react-native";
import React, { memo, useCallback, useState, } from "react";
import { ThemedBackButton } from "../../components/widgets/theme-back-button";
import { ScrollView } from "../../components/widgets/themed-scrollview";
import { ThemedAppBar } from "../../components/widgets/themed-app-bar";
import { View } from "../../components/widgets/themed-view";
import { Text } from "../../components/widgets/themed-text";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/widgets/themed-button";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoutes } from "../../navigation/types";
import { PasswordIcon } from "../../assets/icons/password";
import { Colors } from "../../constants/colors";
import { PasswordForm } from "../../components/auth/password-form";

const PasswordScreen = memo(() => {
  const [loading, setLoading] = useState(false);
  const colorScheme = useColorScheme();
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
      <ThemedAppBar left={<ThemedBackButton />} midText="Нууц үг" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ScrollView keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled" style={styles.container}  >
          <View style={styles.midLogo}>
            <PasswordIcon color={colorScheme === "dark" ? Colors.defaultColor.white : Colors.defaultColor.primary} />
          </View>
          <Text size={20} style={styles.title} type="SemiBold">Нууц үг үүсгэх</Text>
          <View style={styles.h8} />
          <Text style={styles.title}>Цаашид нэвтрэхдээ ашиглах нууц үгээ оруулна уу</Text>
          <View style={styles.h32} />
          <PasswordForm control={control} errors={errors} />
          <Button label="Болсон" loading={loading} onPress={handleSubmit(onSubmit)} style={styles.button} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
});

PasswordScreen.displayName = "PasswordScreen";

export { PasswordScreen };

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