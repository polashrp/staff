import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const View4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <View style={[styles.profileParent, styles.viewFlexBox]}>
        <ImageBackground
          style={styles.profileIcon}
          resizeMode="cover"
          source={require("../assets/property1default.png")}
        />
        <View style={styles.jessicaBrownParent}>
          <Text style={[styles.jessicaBrown, styles.onlineNowLayout]}>
            Jessica Brown
          </Text>
          <Text style={[styles.onlineNow, styles.onlineNowLayout]}>
            Online now
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.close, styles.viewFlexBox]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.barTenders}>Bar Tenders</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector38.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  onlineNowLayout: {
    height: 23,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 40,
    height: 40,
  },
  jessicaBrown: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.outfitRegular,
  },
  onlineNow: {
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray_200,
  },
  jessicaBrownParent: {
    width: 262,
    marginLeft: 10,
  },
  profileParent: {
    width: 334,
  },
  barTenders: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.staffColor,
    display: "none",
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_mid,
  },
  vectorIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  close: {
    width: 25,
    height: 25,
    overflow: "hidden",
    justifyContent: "center",
    padding: Padding.p_7xs,
  },
  view: {
    backgroundColor: Color.staffColor,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default View4;
