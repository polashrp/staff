import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Item2Type = {
  style?: StyleProp<ViewStyle>;
};

const Item2 = ({ style }: Item2Type) => {
  return (
    <View style={[styles.item, style]}>
      <Image
        style={styles.itemChild}
        contentFit="cover"
        source={require("../assets/group-816.png")}
      />
      <Text style={styles.message}>Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemChild: {
    width: 27,
    height: 25,
  },
  message: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.color,
    textAlign: "left",
    marginTop: 1,
  },
  item: {
    alignItems: "center",
  },
});

export default Item2;
