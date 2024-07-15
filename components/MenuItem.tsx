import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type MenuItemType = {
  myBookings?: string;
};

const MenuItem = ({ myBookings }: MenuItemType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={[styles.menuitem, styles.menuitemFlexBox]}>
      <View style={[styles.myBookingsWrapper, styles.menuitemFlexBox]}>
        <Text style={[styles.myBookings, styles.myBookingsFlexBox]}>
          {myBookings}
        </Text>
      </View>
      <Pressable style={styles.close} onPress={() => navigation.goBack()}>
        <Text style={[styles.barTenders, styles.myBookingsFlexBox]}>
          Bar Tenders
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuitemFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  myBookingsFlexBox: {
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  myBookings: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray_100,
    flex: 1,
  },
  myBookingsWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    flex: 1,
  },
  barTenders: {
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.staffColor,
    display: "none",
  },
  vectorIcon: {
    width: 10,
    height: 20,
    marginLeft: 10,
  },
  close: {
    width: 25,
    height: 25,
    overflow: "hidden",
    justifyContent: "center",
    padding: Padding.p_7xs,
    alignItems: "center",
    flexDirection: "row",
  },
  menuitem: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.staffColor,
    borderBottomWidth: 0.5,
    padding: Padding.p_3xs,
  },
});

export default MenuItem;
