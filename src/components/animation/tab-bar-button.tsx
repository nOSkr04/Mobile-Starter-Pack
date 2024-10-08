import { Pressable, StyleSheet, Text,  } from "react-native";
import React, { memo, useEffect, useRef } from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onPress: () => void;
  onLayout: (e: any) => void
};

const TabBarButton = memo(({ active, options, onPress,onLayout }: TabBarComponentProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play();
    }
  }, [active]);

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(active ? 1.5 : 1) }],
      // withTiming(active ? 1 : 0.5, { duration: 250 })
    };
  });

  return (
    <Pressable onLayout={onLayout} onPress={onPress} style={styles.component}>
      <Animated.View
          style={[styles.iconContainer, animatedIconContainerStyles]}
        >
        {/* @ts-ignore */}
        {options.tabBarIcon ? options.tabBarIcon({ ref, active }) : <Text>?</Text>}
      </Animated.View>
    </Pressable>
  );
});

TabBarButton.displayName="TabBarButton";

export { TabBarButton };

const styles = StyleSheet.create({
  component: {
    flex           : 1,
    alignItems     : "center",
    justifyContent : "center",
    paddingVertical: 16
  },
  iconContainer: {
    position      : "absolute",
    top           : 0,
    left          : 0,
    right         : 0,
    bottom        : 0,
    justifyContent: "center",
    alignItems    : "center",
  },
});