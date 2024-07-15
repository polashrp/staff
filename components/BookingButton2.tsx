import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type BookingButton2Type = {
  style?: StyleProp<ViewStyle>;
};

const BookingButton2 = ({ style }: BookingButton2Type) => {
  return (
    <View style={[styles.bookingbutton, style]}>
      <Text style={styles.completed}>Completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  completed: {
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

export default BookingButton2;
