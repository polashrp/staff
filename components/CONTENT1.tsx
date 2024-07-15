import * as React from "react";
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

export type CONTENT1Type = {
  style?: StyleProp<ViewStyle>;
};

const CONTENT1 = ({ style }: CONTENT1Type) => {
  return (
    <ScrollView
      style={[styles.viewFlexBox, style]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cONTENTScrollViewContent}
    >
      <View style={[styles.view, styles.viewFlexBox]}>
        <Pressable style={styles.listitem}>
          <View style={styles.frameParent}>
            <View style={styles.profileParent}>
              <ImageBackground
                style={styles.profileIcon}
                resizeMode="cover"
                source={require("../assets/property1default5.png")}
              />
              <View style={styles.star}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector9.png")}
                />
                <Text style={[styles.text, styles.textFlexBox1]}>5.0</Text>
              </View>
            </View>
            <View style={styles.mesmeristParent}>
              <Text
                style={[styles.mesmerist, styles.loginTypo]}
              >{`Mesmerist `}</Text>
              <View style={styles.buttonFlexBox}>
                <View style={styles.eplocation}>
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require("../assets/vector18.png")}
                  />
                  <Image
                    style={styles.vectorIcon2}
                    contentFit="cover"
                    source={require("../assets/vector19.png")}
                  />
                  <Text style={[styles.t, styles.tTypo1]}>t</Text>
                </View>
                <Text
                  style={[styles.princeAlbertSt, styles.tTypo1]}
                >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
              </View>
            </View>
          </View>
          <Pressable style={[styles.button, styles.buttonFlexBox]}>
            <Text
              style={[styles.login, styles.tTypo1]}
            >{`I’m on my way `}</Text>
          </Pressable>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cONTENTScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewFlexBox: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    alignSelf: "stretch",
  },
  textFlexBox1: {
    textAlign: "left",
    letterSpacing: 0,
  },
  loginTypo: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
  },
  tTypo1: {
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
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    height: 65,
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.outfitRegular,
    marginLeft: 10,
    color: Color.colorSlategray_100,
    lineHeight: 22,
  },
  star: {
    shadowRadius: 6,
    elevation: 6,
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    marginTop: -5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  profileParent: {
    alignItems: "center",
  },
  mesmerist: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  vectorIcon1: {
    width: 23,
    height: 30,
    zIndex: 0,
  },
  vectorIcon2: {
    position: "absolute",
    height: "31.07%",
    width: "31.14%",
    top: "24.85%",
    right: "34.43%",
    bottom: "44.08%",
    left: "34.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    overflow: "hidden",
  },
  t: {
    color: Color.colorBlack,
    display: "none",
    zIndex: 2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 10,
    textAlign: "left",
    lineHeight: 22,
  },
  eplocation: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
    flexDirection: "row",
  },
  princeAlbertSt: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 10,
    textAlign: "left",
    color: Color.colorSlategray_100,
    flex: 1,
  },
  mesmeristParent: {
    marginLeft: 10,
    flex: 1,
    alignSelf: "stretch",
  },
  frameParent: {
    height: 82,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  login: {
    textTransform: "capitalize",
    color: Color.staffColor,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    flex: 1,
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.staffColor,
    borderWidth: 1,
    height: 50,
  },
  listitem: {
    shadowRadius: 10,
    elevation: 10,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
  view: {
    padding: Padding.p_xl,
  },
});

export default CONTENT1;
