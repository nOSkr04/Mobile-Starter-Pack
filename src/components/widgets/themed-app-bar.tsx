import { StyleSheet, } from "react-native";
import React, { memo } from "react";
import { View } from "./themed-view";
import { Text } from "./themed-text";

type Props = {
  left?: React.ReactNode;
  mid?: React.ReactNode;
  right?: React.ReactNode;
  midText?: string;
}

const ThemedAppBar = memo(({ left,mid, right, midText }: Props) => {
  return (
    <View style={styles.root}>
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
    flexDirection  : "row",
    alignItems     : "center",
    height         : 56,
    backgroundColor: "red"
  },
  left: {
    flex          : 1,
    justifyContent: "flex-start",
    alignSelf     : "flex-start"
  },
  mid: {
    alignSelf     : "center",
    flex          : 2,
    justifyContent: "center",
    alignItems    : "center"
  },
  right: {
    alignItems: "flex-end",
    flex      : 1
  }
});