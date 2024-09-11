import React, {   useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, useColorScheme,  } from "react-native";
import { persistor, store } from "./src/store";
import { NavigationContainer } from "./src/navigation/navigation-container";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SplashAnimationScreen } from "./src/screens/splash-animation";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [splashAnimation, setSplashAnimation] = useState(false);

  const [fontsLoaded, fontError] = Font.useFonts({
    "Regular"  : require("./src/assets/fonts/Inter_Regular.ttf"),
    "Medium"   : require("./src/assets/fonts/Inter_Medium.ttf"),
    "Bold"     : require("./src/assets/fonts/Inter_Bold.ttf"),
    "SemiBold" : require("./src/assets/fonts/Inter_SemiBold.ttf"),
    "ExtraBold": require("./src/assets/fonts/Inter_ExtraBold.ttf"),
  });

  useEffect(() => {
    if(fontError || fontsLoaded){
      setAppIsReady(true);
      SplashScreen.hideAsync();
    }
  },[fontError, fontsLoaded]);



  if (!appIsReady || !splashAnimation) {
    return <SplashAnimationScreen onFinish={() => setSplashAnimation(true)} />;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SWRConfig>
          <View   style={styles.container}>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme: DefaultTheme} >
              <GestureHandlerRootView style={styles.container}>
                <SafeAreaProvider>
                  <StatusBar style="dark" />
                  <NavigationContainer />
                </SafeAreaProvider>
              </GestureHandlerRootView>
            </ThemeProvider>
          </View>
        </SWRConfig>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
