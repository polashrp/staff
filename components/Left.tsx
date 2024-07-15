import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Left = () => {
  return (
    <View style={styles.left}>
      <View style={styles.frameParent}>
        <View style={styles.whereAreYouJessicaWrapper}>
          <Text style={styles.whereAreYou}>Where are you Jessica</Text>
        </View>
        <Text style={styles.minutesAgo}>2 minutes ago</Text>
      </View>
      <ImageBackground
        style={styles.profileIcon}
        resizeMode="cover"
        source={require("../assets/property1default.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  whereAreYou: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslateblue,
    width: 210,
    textAlign: "left",
  },
  whereAreYouJessicaWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorMintcream,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  minutesAgo: {
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.rubikRegular,
    color: Color.colorDimgray_100,
    width: 79,
    height: 26,
    marginTop: 10,
    textAlign: "left",
  },
  frameParent: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  left: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

export default Left;
