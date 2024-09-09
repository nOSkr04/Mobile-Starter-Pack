import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { persistor, store } from "./src/store";
import { NavigationContainer } from "./src/navigation/navigation-container";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SWRConfig>
          <GestureHandlerRootView style={styles.container}>
            <SafeAreaProvider>
              <StatusBar style="dark" />
              <NavigationContainer />
            </SafeAreaProvider>
          </GestureHandlerRootView>
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
