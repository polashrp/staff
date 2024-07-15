import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import View1 from "../components/View1";
import Input1 from "../components/Input1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SignupPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.signupPassword}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signupPasswordScrollViewContent}
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
          <Text style={[styles.setYourPassword, styles.loginTypo]}>
            Set your password for Barmily
          </Text>
        </View>
        <View style={[styles.view2, styles.viewSpaceBlock]}>
          <Input1
            enterPassword="Password*"
            vector={require("../assets/vector7.png")}
            propMarginTop="unset"
          />
          <Input1
            enterPassword="Confirm Password*"
            vector={require("../assets/vector7.png")}
            propMarginTop={20}
          />
        </View>
        <View style={[styles.view3, styles.viewSpaceBlock]}>
          <Pressable
            style={[styles.button, styles.viewFlexBox]}
            onPress={() => navigation.navigate("TermsConditions")}
          >
            <Text style={[styles.login, styles.loginTypo]}>Next</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signupPasswordScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  viewFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
    paddingHorizontal: Padding.p_xl,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  setYourPassword: {
    fontSize: FontSize.size_base,
    color: Color.colorSlategray_100,
    textAlign: "left",
  },
  view1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  view2: {
    paddingVertical: Padding.p_11xl,
    paddingHorizontal: Padding.p_xl,
    marginTop: 20,
    flex: 1,
  },
  login: {
    fontSize: FontSize.size_lg,
    textTransform: "capitalize",
    textAlign: "center",
    color: Color.staffColor,
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  view3: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
    alignItems: "center",
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
  },
  signupPassword: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
});

export default SignupPassword;
