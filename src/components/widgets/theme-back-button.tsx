import { StyleSheet,  TouchableOpacity,  } from "react-native";
import React, { memo } from "react";
import { useThemeColor } from "../../hooks/useThemeColor";
import { useNavigation } from "@react-navigation/native";
import { RightArrowIcon } from "../../assets/icons/right-arrow";



const ThemedBackButton = memo(() => {
    const navigation = useNavigation();
    const borderColor = useThemeColor({  }, "primaryBorder");
    const color = useThemeColor({  }, "text");
    return (
      <TouchableOpacity onPress={() => navigation.goBack()} style={[{ borderColor }, styles.container]}>
        <RightArrowIcon color={color}/>
      </TouchableOpacity>
    );
  });

  ThemedBackButton.displayName="ThemedBackButton";

export { ThemedBackButton };

const styles = StyleSheet.create({
    container: {
        padding     : 6,
        borderWidth : 1,
        borderRadius: 12,
        alignSelf   : "center"
    }
});