import * as React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const View6 = () => {
  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <ImageBackground
        style={styles.profileIcon}
        resizeMode="cover"
        source={require("../assets/property1default3.png")}
      />
      <Text style={[styles.mesmerist, styles.tLayout]}>Mesmerist</Text>
      <View style={[styles.rating, styles.viewFlexBox]}>
        <View style={styles.startLayout}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
          <Text style={[styles.t, styles.tLayout]}>t</Text>
        </View>
        <View style={[styles.start1, styles.startLayout]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
          <Text style={[styles.t, styles.tLayout]}>t</Text>
        </View>
        <View style={[styles.start1, styles.startLayout]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
          <Text style={[styles.t, styles.tLayout]}>t</Text>
        </View>
        <View style={[styles.start1, styles.startLayout]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
          <Text style={[styles.t, styles.tLayout]}>t</Text>
        </View>
        <View style={[styles.start1, styles.startLayout]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector17.png")}
          />
          <Text style={[styles.t, styles.tLayout]}>t</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  tLayout: {
    lineHeight: 22,
    letterSpacing: 0,
  },
  startLayout: {
    height: 38,
    width: 38,
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 140,
    height: 140,
  },
  mesmerist: {
    fontSize: FontSize.size_lgi,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslateblue,
    textAlign: "center",
    marginTop: 10,
    alignSelf: "stretch",
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  t: {
    top: "28.95%",
    left: "23.68%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  start1: {
    marginLeft: 10,
  },
  rating: {
    flexDirection: "row",
    marginTop: 10,
  },
  view: {
    backgroundColor: Color.colorGray,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_21xl,
    paddingBottom: Padding.p_xl,
    alignSelf: "stretch",
  },
});

export default View6;
