import { StyleSheet, } from "react-native";
import React, { memo } from "react";
import { View } from "../widgets/themed-view";
import { ThemedLogo } from "../widgets/themed-logo";
import { Text } from "../widgets/themed-text";

const AuthTopCard = memo(({ title, description }: {title: string, description: string}) => {
  return (
    <>
      <View style={styles.midLogo}>
        <ThemedLogo size={80} />
      </View>
      <Text size={20} style={styles.title} type="SemiBold">{title}</Text>
      <View style={styles.h8} />
      <Text style={styles.title}>{description}</Text>
      <View style={styles.h32} />
    </>
  );
});

AuthTopCard.displayName="AuthTopCard";

export { AuthTopCard };

const styles = StyleSheet.create({
  midLogo: {
    alignSelf     : "center",
    marginVertical: 32,
  },
  title: {
    textAlign       : "center",
    marginHorizontal: 90
  },
  h8: {
    height: 8
  },
  h32: {
    height: 32
  },
});