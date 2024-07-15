import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Item1Type = {
  style?: StyleProp<ViewStyle>;
};

const Item1 = ({ style }: Item1Type) => {
  return (
    <View style={[styles.item, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector36.png")}
      />
      <Text style={styles.bookings}>Bookings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 24,
    height: 23,
  },
  bookings: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.color,
    textAlign: "left",
    marginTop: 2,
  },
  item: {
    alignItems: "center",
  },
});

export default Item1;
