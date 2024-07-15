import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type BookingButton1Type = {
  style?: StyleProp<ViewStyle>;
};

const BookingButton1 = ({ style }: BookingButton1Type) => {
  return (
    <View style={[styles.bookingbutton, style]}>
      <Text style={styles.accepted}>Accepted</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  accepted: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.staffColor,
    textAlign: "left",
  },
  bookingbutton: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BookingButton1;
