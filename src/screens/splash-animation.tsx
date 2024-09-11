import { StyleSheet, useColorScheme, } from "react-native";
import React, { memo, } from "react";
import Animated, { Easing, Keyframe } from "react-native-reanimated";
import { LogoIcon } from "../assets/icons/logo";
import { View } from "../components/widgets/themed-view";
import { Colors } from "../constants/colors";

const SplashAnimationScreen = memo(({ onFinish }: { onFinish: () => void }) => {
  const colorScheme = useColorScheme();
  const enteringAnimation = new Keyframe({
    0: {
      transform: [
        { rotate: "0deg" },
        { scale: 0 },
      ],
    },
    50: {
      transform: [
        { rotate: "0deg" },
        { scale: 1.1 },
      ],
    },
    75: {
      transform: [
        { rotate: "-90deg" },
        { scale: 1.1 },
      ],
      easing: Easing.inOut(Easing.ease)
    },
    100: {
      transform: [
        { rotate: "-180deg" },
        { scale: 1.1 },
      ],
      easing: Easing.in(Easing.ease)
    },
  }).duration(1200);

  setTimeout(() => {
    onFinish();
  }, 1400);
  return (
    <View style={styles.root}>
      <Animated.View entering={enteringAnimation}>
        <LogoIcon color={colorScheme === "dark" ? Colors.defaultColor.white : Colors.defaultColor.primary} />
      </Animated.View>
    </View>
  );
});

SplashAnimationScreen.displayName = "SplashAnimationScreen";

export { SplashAnimationScreen };

const styles = StyleSheet.create({
  root: {
    flex          : 1,
    justifyContent: "center",
    alignItems    : "center"
  },
  image: {
    width : 430,
    height: 430
  }
});