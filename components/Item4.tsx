import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Item4Type = {
  style?: StyleProp<ViewStyle>;
};

const Item4 = ({ style }: Item4Type) => {
  return (
    <View style={[styles.item, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector35.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 21,
    height: 21,
  },
  home: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    marginTop: 3,
  },
  item: {
    alignItems: "center",
  },
});

export default Item4;
