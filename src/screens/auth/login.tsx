import { KeyboardAvoidingView, Platform, StyleSheet, View, } from "react-native";
import React, { memo, useCallback, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { AuthApi } from "../../api";
import { authLogin } from "../../store/auth-slice";
import { useForm } from "react-hook-form";
import { ScrollView } from "../../components/widgets/themed-scrollview";
import { LoginForm } from "../../components/auth/login-form";
import { LogoIcon } from "../../assets/icons/logo";
import { Text } from "../../components/widgets/themed-text";
import { useThemeColor } from "../../hooks/useThemeColor";
const LoginScreen = memo(() => {
  const sf = useSafeAreaInsets();
  const dispatch = useDispatch();
  const backgroundColor = useThemeColor({  }, "background");
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    const createData = {
      username: data.username,
      password: data.password,
    };

    try {
      const res = await AuthApi.login(createData);
      dispatch(authLogin(res));
    } catch (err: any) {
      if (err.statusCode === 404) {
        setError("root", {
          message: "Серверт алдаа гарсан байна та түр хүлээнэ үү"
        });
        return;
      }
      setError("username", {
        message: err.error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const top = useCallback(() => {
    return {
      paddingTop: sf.top,
      backgroundColor,
    };
  }, [backgroundColor, sf.top]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={[styles.container, top()]}
    >
      <ScrollView keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled" style={styles.container}  >
        <View style={styles.midIcon}>
          <LogoIcon size={100}  />
        </View>
        <Text size={24} style={styles.title} type="SemiBold">BISHRELT LOYALTY</Text>
        <LoginForm control={control} errors={errors} loading={loading} onSubmit={handleSubmit(onSubmit)} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

LoginScreen.displayName = "LoginScreen";

export { LoginScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  midIcon: {
    alignSelf: "center",
    marginTop: 48
  },
  title: {
    textAlign     : "center",
    marginVertical: 32
  }
});


