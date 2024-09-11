import { Dimensions, LayoutChangeEvent, StyleSheet, } from "react-native";
import React, { memo, useReducer, } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "../widgets/themed-view";
import { Colors } from "../../constants/colors";
import { } from "react-native-safe-area-context";
import { TabBarButton } from "./tab-bar-button";
import Svg, {  Rect } from "react-native-svg";
import Animated, { useAnimatedStyle, useDerivedValue,  withTiming } from "react-native-reanimated";

const width = Dimensions.get("window").width;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const TabBarAnimation = memo(({ state: { index: activeIndex, routes }, descriptors, navigation }: BottomTabBarProps) => {
  const reducer = (state: any, action: { x: number; index: number }) => {
    return [...state, { x: action.x, index: action.index }];
  };
  const [layout, dispatch] = useReducer(reducer, []);
  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };
  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return [...layout].find(({ index }) => index === activeIndex)!.x ;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(xOffset.value, { duration: 250 }) },
      ],
    };
  });

  return (
    <View darkColor={Colors.defaultColor.white} style={styles.root}>
      <AnimatedSvg
          height={60}
          style={[styles.activeBackground, animatedStyles]}
          viewBox="0 0 110 60"
          width={110}
        >
        <Rect fill="#1A2482" height="60" rx="12" width="65"/>
      </AnimatedSvg>
      {routes.map((route, index) => {
        const active = index === activeIndex;
        const { options } = descriptors[route.key];
        return (
          <TabBarButton
            active={active}
            key={route.key}
            onLayout={(e) => handleLayout(e, index)}
            onPress={() => navigation.navigate(route.name)}
            options={options}
          />
        );
      })}
    </View>
  );
});

TabBarAnimation.displayName = "TabBarAnimation";

export { TabBarAnimation };

const styles = StyleSheet.create({
  root: {
    position        : "absolute",
    bottom          : 50,
    flexDirection   : "row",
    justifyContent  : "space-between",
    marginHorizontal: 28,
    alignItems      : "center",
    borderRadius    : 16,
    shadowColor     : Colors.defaultColor.black,
    shadowOffset    : {
      width : 0,
      height: 10,
    },
    shadowRadius : 10,
    shadowOpacity: 0.1,
    height       : 60,
    width        : width - 56
  },
  activeBackground: {
    position: "absolute",
  },
});