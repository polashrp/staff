import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Text,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CONTENT from "../components/CONTENT";
import CONTENT1 from "../components/CONTENT1";
import CONTENT2 from "../components/CONTENT2";
import BookingButton from "../components/BookingButton";
import BookingButton3 from "../components/BookingButton3";
import BookingButton1 from "../components/BookingButton1";
import BookingButton4 from "../components/BookingButton4";
import BookingButton2 from "../components/BookingButton2";
import BookingButton5 from "../components/BookingButton5";
import { Image } from "expo-image";
import View5 from "../components/View5";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const MyBookings2 = () => {
  return (
    <View style={styles.myBookings}>
      <View style={[styles.statusBar, styles.barFlexBox]} />
      <View5 reviewRating="My Bookings" />
      <TopTab.Navigator
        style={styles.tabToptabs}
        tabBar={({ state, descriptors, navigation, position }) => {
          const [activeItems] = React.useState([
            <BookingButton />,
            <BookingButton1 />,
            <BookingButton2 />,
          ]);
          const [normalItems] = React.useState([
            <BookingButton3 />,
            <BookingButton4 />,
            <BookingButton5 />,
          ]);
          const activeIndex = state.index;
          return (
            <View style={styles.topTabBarStyle}>
              {normalItems.map((item, index) => {
                const isFocused = state.index === index;
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.navigate({
                        name: state.routes[index].name,
                        merge: true,
                      });
                    }}
                  >
                    {activeIndex === index ? activeItems[index] : item}
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        }}
      >
        <TopTab.Screen name="CONTENT" component={CONTENT} />
        <TopTab.Screen name="CONTENT1" component={CONTENT1} />
        <TopTab.Screen name="CONTENT2" component={CONTENT2} />
      </TopTab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabToptabs: {
    width: "100%",
  },
  topTabBarStyle: {
    alignSelf: "stretch",
    backgroundColor: "#33ffbd",
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 42,
    zIndex: 1,
  },
  barFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.staffColor,
  },
  listitemShadowBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  listitemFlexBox: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    letterSpacing: 0,
    marginLeft: 10,
  },
  homeTypo: {
    marginTop: 3,
    color: Color.colorWhite,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 22,
  },
  statusBar: {
    height: 40,
    alignItems: "center",
    alignSelf: "stretch",
  },
  myBookings: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
});

export default MyBookings2;
