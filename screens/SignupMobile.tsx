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
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const SignupMobile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.signupMobile}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signupMobileScrollViewContent}
    >
      <View style={styles.statusBar} />
      <View style={styles.section}>
        <View1
          logo={require("../assets/logo2.png")}
          vectorIconHeight="unset"
          vectorIconMarginTop="unset"
          vectorIconBackgroundColor="unset"
        />
        <View style={[styles.view, styles.viewFlexBox]}>
          <Text style={[styles.helloDanielleJarvis, styles.loginClr]}>
            Hello, Danielle Jarvis
          </Text>
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <Property1Default4
            enterEmail="Verify your mobile number"
            danielleJarvisjourrKeyboa="phone-pad"
            danielleJarvisjourrPlaceh="070591254"
            showEnterEmail
            property1DefaultPosition="unset"
            property1DefaultMarginTop="unset"
            property1DefaultAlignSelf="stretch"
          />
        </View>
      </View>
      <View style={[styles.view2, styles.viewSpaceBlock]}>
        <Pressable
          style={[styles.button, styles.viewFlexBox]}
          onPress={() => navigation.navigate("SignupMoibleOtp")}
        >
          <Text style={[styles.login, styles.loginClr]}>Verify</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signupMobileScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  loginClr: {
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  viewSpaceBlock: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
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
  },
  view: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 20,
  },
  view1: {
    height: 445,
    marginTop: 20,
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
  },
  login: {
    fontSize: FontSize.size_lg,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
  },
  view2: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  signupMobile: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
});

export default SignupMobile;
