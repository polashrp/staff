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
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SignupFullname = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.signupFullname}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.signupFullnameScrollViewContent}
    >
      <View style={[styles.statusBar, styles.view2FlexBox]} />
      <View style={styles.section}>
        <View1
          logo={require("../assets/logo2.png")}
          vectorIconHeight="unset"
          vectorIconMarginTop="unset"
          vectorIconBackgroundColor="unset"
        />
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Text style={[styles.whatIsYour, styles.loginClr]}>
            What is Your Name?
          </Text>
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <Property1Default4
            enterEmail="What is Your Name?"
            danielleJarvisjourrPlaceh="Andrew Miles"
            showEnterEmail
            property1DefaultPosition="unset"
            property1DefaultMarginTop="unset"
            property1DefaultAlignSelf="stretch"
          />
        </View>
      </View>
      <View style={[styles.view2, styles.view2FlexBox]}>
        <Pressable
          style={[styles.button, styles.viewFlexBox]}
          onPress={() => navigation.navigate("SignupVeryfyEmail")}
        >
          <Text style={[styles.login, styles.loginClr]}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signupFullnameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view2FlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  viewSpaceBlock: {
    marginTop: 20,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  loginClr: {
    color: Color.staffColor,
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
  },
  whatIsYour: {
    fontSize: FontSize.size_lgi,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
  },
  view: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  view1: {
    height: 445,
    paddingVertical: Padding.p_11xl,
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
  },
  login: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
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
    alignSelf: "stretch",
  },
  view2: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
  },
  signupFullname: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
});

export default SignupFullname;
