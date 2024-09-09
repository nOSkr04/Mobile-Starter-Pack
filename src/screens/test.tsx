import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

const TestScreen = memo(() => {
  return (
    <View>
      <Text>TestScreen</Text>
    </View>
  );
});

TestScreen.displayName = "TestScreen";

export { TestScreen };

const styles = StyleSheet.create({});
