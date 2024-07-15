import * as React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Right = () => {
  return (
    <View style={styles.right}>
      <ImageBackground
        style={styles.profileIcon}
        resizeMode="cover"
        source={require("../assets/property1default.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.justReachedLocationMateBuWrapper}>
          <Text style={styles.justReachedLocation}>
            Just reached location mate, but not sure.
          </Text>
        </View>
        <Text style={styles.minutesAgo}>2 minutes ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 40,
    height: 40,
  },
  justReachedLocation: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslateblue,
    width: 210,
    textAlign: "left",
  },
  justReachedLocationMateBuWrapper: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_100,
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
    justifyContent: "flex-end",
    marginLeft: 10,
  },
  right: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
});

export default Right;
