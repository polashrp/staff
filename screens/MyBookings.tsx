import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import View5 from "../components/View5";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const MyBookings = () => {
  return (
    <View style={styles.myBookings}>
      <View style={[styles.statusBar, styles.tabFlexBox]} />
      <View5 reviewRating="My Bookings" />
      <View style={[styles.tab, styles.tabFlexBox]}>
        <View style={styles.bookingbutton}>
          <Text style={[styles.pending, styles.pendingFlexBox]}>Completed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  pendingFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  loginTypo: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
  },
  tTypo: {
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
  },
  buttonFlexBox: {
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  statusBar: {
    backgroundColor: Color.staffColor,
    height: 40,
    alignItems: "center",
  },
  pending: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  bookingbutton: {
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    backgroundColor: Color.color,
    alignItems: "center",
  },
  myBookings: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default MyBookings;
