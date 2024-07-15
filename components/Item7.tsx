import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Item7Type = {
  style?: StyleProp<ViewStyle>;
};

const Item7 = ({ style }: Item7Type) => {
  return (
    <View style={[styles.item, style]}>
      <Image
        style={styles.itemChild}
        contentFit="cover"
        source={require("../assets/group-234.png")}
      />
      <Text style={styles.requests}>Requests</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemChild: {
    width: 19,
    height: 21,
  },
  requests: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "left",
    marginTop: 3,
  },
  item: {
    alignItems: "center",
  },
});

export default Item7;
