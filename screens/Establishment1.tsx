import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import View1 from "../components/View1";
import Star from "../components/Star";
import Typetem1 from "../components/Typetem1";
import Property1Workable from "../components/Property1Workable";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Establishment1 = () => {
  return (
    <ScrollView
      style={styles.establishment}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.establishmentScrollViewContent}
    >
      <View style={styles.statusBar} />
      <View1
        logo={require("../assets/logo5.png")}
        vectorIconHeight="unset"
        vectorIconMarginTop="unset"
        vectorIconBackgroundColor="#33ffbd"
      />
      <View style={[styles.content, styles.viewBg]}>
        <View style={[styles.view, styles.viewSpaceBlock1]}>
          <View style={[styles.profilecard, styles.profilecardSpaceBlock]}>
            <View style={[styles.instanceParent, styles.profilecardSpaceBlock]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-298.png")}
              />
              <View style={styles.jessicaBrownWrapper}>
                <Text style={[styles.jessicaBrown, styles.loginFlexBox]}>
                  Mesmerist
                </Text>
              </View>
            </View>
            <Star />
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default3.png")}
            />
          </View>
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <View style={[styles.typetem, styles.typetemShadowBox]}>
            <View style={[styles.instanceGroup, styles.button4Border]}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector13.png")}
                />
                <Text style={[styles.t, styles.tTypo]}>t</Text>
              </View>
              <View style={[styles.jobTypeWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.jobType, styles.loginClr]}>Job Type</Text>
              </View>
            </View>
            <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
              <Pressable style={styles.buttonFlexBox1}>
                <Text style={[styles.barTenders, styles.loginTypo]}>
                  Bar tenders
                </Text>
              </Pressable>
              <Pressable style={[styles.button1, styles.buttonFlexBox1]}>
                <Text style={[styles.barTenders, styles.loginTypo]}>
                  Mixologist
                </Text>
              </Pressable>
              <Pressable style={[styles.button1, styles.buttonFlexBox1]}>
                <Text
                  style={[styles.barTenders, styles.loginTypo]}
                >{`Front of House `}</Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.typetem1, styles.parentSpaceBlock]}>
            <View style={[styles.instanceGroup, styles.button4Border]}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector13.png")}
                />
                <Text style={[styles.t, styles.tTypo]}>t</Text>
              </View>
              <View style={[styles.addressWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.address, styles.loginClr]}>Address</Text>
              </View>
              <Pressable style={[styles.button3, styles.buttonFlexBox]}>
                <Text style={[styles.dontHaveAn, styles.loginTypo]}>
                  view map
                </Text>
              </Pressable>
            </View>
            <View style={[styles.eplocationParent, styles.parentSpaceBlock]}>
              <View style={styles.eplocation}>
                <Image
                  style={styles.vectorIcon2}
                  contentFit="cover"
                  source={require("../assets/vector18.png")}
                />
                <Image
                  style={styles.vectorIcon3}
                  contentFit="cover"
                  source={require("../assets/vector19.png")}
                />
                <Text style={[styles.t2, styles.tTypo]}>t</Text>
              </View>
              <Text style={styles.princeAlbertSt}>
                1-3 Prince Albert St, Brighton and Hove, Brighton BN1 1HE
              </Text>
            </View>
          </View>
          <Typetem1 />
          <Property1Workable
            property1WorkablePosition="unset"
            property1WorkablePadding="unset"
            property1WorkableAlignSelf="stretch"
            property1WorkablePaddingHorizontal="unset"
            property1WorkablePaddingVertical="unset"
            property1WorkableMarginTop={10}
          />
        </View>
        <View style={[styles.view2, styles.viewSpaceBlock]}>
          <Pressable style={[styles.button4, styles.buttonFlexBox]}>
            <Text style={[styles.login, styles.loginTypo]}>Send Profile</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  establishmentScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewBg: {
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
  viewSpaceBlock1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
  },
  profilecardSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    alignSelf: "stretch",
  },
  loginFlexBox: {
    textAlign: "center",
    flex: 1,
  },
  viewSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  typetemShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    padding: Padding.p_xl,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  button4Border: {
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  tTypo: {
    color: Color.colorBlack,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    lineHeight: 22,
    letterSpacing: 0,
    display: "none",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    marginLeft: 20,
    flex: 1,
  },
  loginClr: {
    color: Color.staffColor,
    fontSize: FontSize.size_lg,
  },
  parentSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  loginTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  buttonFlexBox1: {
    height: 33,
    backgroundColor: Color.colorMediumslateblue_100,
    borderRadius: Border.br_41xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFlexBox: {
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.color,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 24,
    height: 24,
    display: "none",
  },
  jessicaBrown: {
    fontSize: FontSize.size_lgi,
    color: Color.color,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0,
  },
  jessicaBrownWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  instanceParent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.staffColor,
    height: 145,
    paddingVertical: Padding.p_8xs,
    zIndex: 0,
  },
  profileIcon: {
    marginLeft: -70,
    top: 22,
    left: "50%",
    borderRadius: Border.br_81xl,
    height: 140,
    zIndex: 2,
    width: 140,
    position: "absolute",
  },
  profilecard: {
    paddingTop: Padding.p_81xl,
    paddingBottom: Padding.p_xl,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  view: {
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    width: 27,
    height: 28,
  },
  t: {
    marginLeft: 10,
    textAlign: "left",
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobType: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  jobTypeWrapper: {
    marginLeft: 20,
  },
  instanceGroup: {
    borderColor: Color.colorLightgray,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  barTenders: {
    color: Color.colorDarkslateblue,
    display: "flex",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    width: 140,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    marginLeft: 10,
  },
  buttonParent: {
    flexDirection: "row",
  },
  typetem: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  address: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0,
  },
  addressWrapper: {
    marginLeft: 20,
    flexDirection: "row",
  },
  dontHaveAn: {
    fontSize: FontSize.size_mini,
    color: Color.colorAquamarine,
    textAlign: "left",
  },
  button3: {
    height: 22,
    marginLeft: 20,
  },
  vectorIcon2: {
    width: 23,
    height: 30,
    zIndex: 0,
  },
  vectorIcon3: {
    height: "31.07%",
    width: "31.14%",
    top: "24.85%",
    right: "34.43%",
    bottom: "44.08%",
    left: "34.43%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  t2: {
    marginLeft: 10,
    textAlign: "left",
    zIndex: 2,
  },
  eplocation: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  princeAlbertSt: {
    lineHeight: 21,
    color: Color.colorSlategray_100,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    flex: 1,
  },
  eplocationParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  typetem1: {
    padding: Padding.p_xl,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  view1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
  },
  login: {
    color: Color.staffColor,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    flex: 1,
  },
  button4: {
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    borderStyle: "solid",
    alignSelf: "stretch",
    backgroundColor: Color.color,
  },
  view2: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
    alignItems: "center",
  },
  content: {
    alignSelf: "stretch",
  },
  establishment: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Establishment1;
