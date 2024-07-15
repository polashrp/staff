import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import View1 from "../components/View1";
import Property1Default4 from "../components/Property1Default4";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const SignupMoibleOtp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.signupMoibleOtp}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signupMoibleOtpScrollViewContent}
    >
      <View style={[styles.statusBar, styles.view3FlexBox]} />
      <View style={styles.section}>
        <View1
          logo={require("../assets/logo2.png")}
          vectorIconHeight="unset"
          vectorIconMarginTop="unset"
          vectorIconBackgroundColor="unset"
        />
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Text style={styles.helloDanielleJarvis}>Hello, Danielle Jarvis</Text>
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <Text
            style={styles.weHaveSent}
          >{`We have sent a verification code to your
mobile number, please enter that below`}</Text>
        </View>
        <View style={[styles.view2, styles.viewSpaceBlock]}>
          <Property1Default4
            enterEmail="Verify your mobile number"
            danielleJarvisjourrKeyboa="phone-pad"
            danielleJarvisjourrPlaceh="070 0354 4013"
            showEnterEmail
            property1DefaultPosition="unset"
            property1DefaultMarginTop="unset"
            property1DefaultAlignSelf="stretch"
          />
          <View style={styles.buttonWrapper}>
            <Pressable style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.dontHaveAn, styles.loginTypo]}>
                Re -Send OTP
              </Text>
            </Pressable>
          </View>
          <Property1Default4
            enterEmail="Enter OTP"
            danielleJarvisjourrPlaceh="9876"
            showEnterEmail
            property1DefaultPosition="unset"
            property1DefaultMarginTop={20}
            property1DefaultAlignSelf="stretch"
          />
        </View>
      </View>
      <View style={[styles.view3, styles.view3FlexBox]}>
        <Pressable
          style={[styles.button1, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("SignupPassword")}
        >
          <Text style={[styles.login, styles.loginTypo]}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signupMoibleOtpScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view3FlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  viewSpaceBlock: {
    marginTop: 20,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    borderRadius: Border.br_6xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  loginTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
  },
  helloDanielleJarvis: {
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  view: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  weHaveSent: {
    color: Color.colorSlategray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  view1: {
    paddingVertical: 0,
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  dontHaveAn: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    textAlign: "left",
  },
  button: {
    height: 22,
  },
  buttonWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "stretch",
  },
  view2: {
    height: 445,
    paddingVertical: Padding.p_11xl,
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
  },
  login: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    flex: 1,
  },
  button1: {
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    alignSelf: "stretch",
  },
  view3: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
  },
  signupMoibleOtp: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
});

export default SignupMoibleOtp;
