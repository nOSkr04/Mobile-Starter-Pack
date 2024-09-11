import { KeyboardAvoidingView, Platform, StyleSheet, } from "react-native";
import React, { memo, useCallback } from "react";
import { ThemedBackButton } from "../../components/widgets/theme-back-button";
import { ScrollView } from "../../components/widgets/themed-scrollview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColor } from "../../hooks/useThemeColor";
import { ThemedAppBar } from "../../components/widgets/themed-app-bar";

const RegisterPhoneScreen = memo(() => {
  const sf = useSafeAreaInsets();
  const backgroundColor = useThemeColor({  }, "background");
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
      <ThemedAppBar left={<ThemedBackButton/>} midText="Бүртгүүлэх" right={<ThemedBackButton/>} />
      <ScrollView keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled" style={styles.container}  >
        {/* <ThemedBackButton/> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
});

RegisterPhoneScreen.displayName="RegisterPhoneScreen";

export { RegisterPhoneScreen };

const styles = StyleSheet.create({

  container: {
    flex: 1,
  }
});