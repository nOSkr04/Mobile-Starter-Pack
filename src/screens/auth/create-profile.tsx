import { KeyboardAvoidingView, Platform, StyleSheet, } from "react-native";
import React, { memo, useCallback, useState } from "react";
import { ThemedBackButton } from "../../components/widgets/theme-back-button";
import { ThemedAppBar } from "../../components/widgets/themed-app-bar";
import { ScrollView } from "../../components/widgets/themed-scrollview";
import { AuthTopCard } from "../../components/auth/auth-top-card";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ProfileForm } from "../../components/auth/profile-form";
import { AuthCompleteModal } from "../../components/auth/auth-complete-modal";

const CreateProfileScreen = memo(() => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      gender   : "MALE",
      birthDate: "2000-01-01",
      firstName: "1",
      lastName : "1",
      email    : "1",
    }
  });

  const toggleModal = useCallback(() => {
    setModalVisible(!modalVisible);
  },[modalVisible]);
  const onSubmit: SubmitHandler<FieldValues> = useCallback(async (data) => {
    setLoading(true);
    setError("root", { "message": "" });
    console.log(data);
    setLoading(false);
    toggleModal();
  }, [setError, toggleModal]);
  
  return (
    <>
      <ThemedAppBar left={<ThemedBackButton />} midText="Бүртгүүлэх" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ScrollView keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled" style={styles.container}>
          <AuthTopCard description="Та өөрийн утасны дугаарыг оруулж бүртгэл үүсгэнэ үү" title="Хаяг үүсгэх" />
          <ProfileForm control={control} errors={errors} loading={loading} onSubmit={handleSubmit(onSubmit)} />
        </ScrollView>
      </KeyboardAvoidingView>
      <AuthCompleteModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
});

CreateProfileScreen.displayName = "CreateProfileScreen";

export { CreateProfileScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});