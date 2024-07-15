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
import { Padding, FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SignupOtp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.signupOtp}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signupOtpScrollViewContent}
    >
      <View style={styles.statusBar} />
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
email address, please enter that below`}</Text>
        </View>
        <View style={[styles.view2, styles.viewSpaceBlock]}>
          <Property1Default4
            enterEmail="Verify your email"
            danielleJarvisjourrKeyboa="email-address"
            danielleJarvisjourrPlaceh="andrewmiles@jourrapide.com"
            showEnterEmail
            property1DefaultPosition="unset"
            property1DefaultMarginTop="unset"
            property1DefaultAlignSelf="stretch"
          />
          <View style={[styles.buttonWrapper, styles.buttonFlexBox]}>
            <Pressable style={[styles.button, styles.view3FlexBox]}>
              <Text style={[styles.dontHaveAn, styles.loginTypo]}>
                Re -Send OTP
              </Text>
            </Pressable>
          </View>
          <Property1Default4
            enterEmail="Enter OTP"
            danielleJarvisjourrPlaceh="20203"
            showEnterEmail
            property1DefaultPosition="unset"
            property1DefaultMarginTop={20}
            property1DefaultAlignSelf="stretch"
          />
        </View>
      </View>
      <View style={[styles.view3, styles.view3FlexBox]}>
        <Pressable
          style={[styles.button1, styles.buttonLayout]}
          onPress={() => navigation.navigate("SignupMobile")}
        >
          <Text style={[styles.login, styles.loginTypo]}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signupOtpScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    marginTop: 20,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  view3FlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
  },
  loginTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
  },
  buttonLayout: {
    borderRadius: Border.br_6xs,
    flexDirection: "row",
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
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
    marginTop: 20,
    flexDirection: "row",
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
    marginTop: 20,
    flexDirection: "row",
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
    borderRadius: Border.br_6xs,
    flexDirection: "row",
  },
  buttonWrapper: {
    alignItems: "flex-end",
    marginTop: 20,
  },
  view2: {
    height: 445,
    paddingVertical: Padding.p_11xl,
    marginTop: 20,
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
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  view3: {
    padding: Padding.p_xl,
  },
  signupOtp: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
});

export default SignupOtp;
