import * as React from "react";
import {
  Pressable,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const MenuItem1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={[styles.menuitem, styles.menuitemFlexBox]}>
      <View style={styles.profileWrapper}>
        <ImageBackground
          style={styles.profileIcon}
          resizeMode="cover"
          source={require("../assets/property1default2.png")}
        />
      </View>
      <View style={[styles.andrewMilesParent, styles.menuitemFlexBox]}>
        <Text style={styles.andrewMiles}>Andrew Miles</Text>
        <Text style={[styles.waiter, styles.waiterTypo]}>Waiter</Text>
      </View>
      <Pressable
        style={[styles.close, styles.closeFlexBox]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.barTenders, styles.waiterTypo]}>Bar Tenders</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuitemFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  waiterTypo: {
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
  },
  closeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    height: 65,
  },
  profileWrapper: {
    alignItems: "center",
  },
  andrewMiles: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
  },
  waiter: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  andrewMilesParent: {
    flex: 1,
  },
  barTenders: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
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
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default MenuItem1;
