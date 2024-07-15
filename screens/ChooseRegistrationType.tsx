import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import View1 from "../components/View1";
import View3 from "../components/View3";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ChooseRegistrationType = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.chooseRegistrationType}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.chooseRegistrationTypeContent}
    >
      <View style={[styles.statusBar, styles.statusBarFlexBox]} />
      <View style={styles.section}>
        <View1
          logo={require("../assets/logo2.png")}
          vectorIconHeight="unset"
          vectorIconMarginTop="unset"
          vectorIconBackgroundColor="unset"
        />
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Text style={[styles.welcomeToBarmilyContainer, styles.loginFlexBox]}>
            <Text style={[styles.welcomeToBarmily, styles.loginTypo]}>
              Welcome To Barmily
            </Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={[styles.letsGetStarted, styles.loginFlexBox]}>
            Lets Get Started
          </Text>
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <View3 joinAsAnEstablishment="Join as an Establishment" />
          <View style={[styles.view2, styles.view2FlexBox]}>
            <View style={styles.statusBarFlexBox}>
              <Text style={[styles.joinAsA, styles.loginTypo]}>
                Join as a Hospitality Worker
              </Text>
            </View>
            <Pressable
              style={[styles.button, styles.view2FlexBox]}
              onPress={() => navigation.navigate("SignupFullname")}
            >
              <Text style={[styles.login, styles.loginTypo]}>Find Work</Text>
            </Pressable>
          </View>
          <View3
            joinAsAnEstablishment="Join for a One-Off Event"
            propBorderStyle="unset"
            propBorderColor="unset"
            propMarginTop={30}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chooseRegistrationTypeContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  statusBarFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  loginFlexBox: {
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  view2FlexBox: {
    marginTop: 30,
    alignItems: "center",
    alignSelf: "stretch",
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
  },
  welcomeToBarmily: {
    color: Color.staffColor,
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslateblue,
  },
  welcomeToBarmilyContainer: {
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_xl,
    alignSelf: "stretch",
  },
  letsGetStarted: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 5,
    color: Color.colorDarkslateblue,
    textAlign: "center",
    lineHeight: 22,
    alignSelf: "stretch",
  },
  view: {
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
  },
  joinAsA: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    letterSpacing: 0,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  login: {
    fontSize: FontSize.size_lgi,
    color: Color.color,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    textTransform: "capitalize",
    flex: 1,
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.staffColor,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  view2: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    padding: Padding.p_xl,
    backgroundColor: Color.colorWhite,
  },
  view1: {
    height: 770,
    paddingVertical: Padding.p_11xl,
  },
  section: {
    alignSelf: "stretch",
  },
  chooseRegistrationType: {
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ChooseRegistrationType;
