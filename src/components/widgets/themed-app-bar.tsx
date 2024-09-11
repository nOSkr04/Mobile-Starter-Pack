import { StyleSheet, } from "react-native";
import React, { memo } from "react";
import { View } from "./themed-view";
import { Text } from "./themed-text";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  left?: React.ReactNode;
  mid?: React.ReactNode;
  right?: React.ReactNode;
  midText?: string;
}

const ThemedAppBar = memo(({ left,mid, right, midText }: Props) => {
  const sf = useSafeAreaInsets();
  const paddingTop = sf.top + 8;
  return (
    <View style={[styles.root, { paddingTop }]}>
      <View style={styles.left}>
        {left}
      </View>
      {midText ? 
        <View style={styles.mid}>
          <Text size={18}  type="Medium">{midText}</Text>
        </View>  
      :
        <View style={styles.mid}>
          {mid}
        </View>
    }
      <View style={styles.right}>
        {right}
      </View>
    </View>
  );
});

ThemedAppBar.displayName = "ThemedAppBar";

export { ThemedAppBar };

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems   : "center",
    paddingBottom: 8,
  },
  left: {
    flex: 1,
  },
  mid: {
    flex          : 2,
    justifyContent: "center",
    alignItems    : "center"
  },
  right: {
    flex: 1,
  }
});