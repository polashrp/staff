import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import View1 from "../components/View1";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const CreateProfile5 = () => {
  return (
    <View style={styles.createProfile3}>
      <View style={styles.statusBar} />
      <View1
        logo={require("../assets/logo2.png")}
        vectorIconHeight={40}
        vectorIconMarginTop="unset"
        vectorIconBackgroundColor="unset"
      />
      <View style={[styles.section, styles.viewSpaceBlock]}>
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Text style={[styles.tellUsA, styles.loginTypo1]}>Tell Us A Bit</Text>
          <Text style={[styles.aboutTheVenue, styles.login1Text]}>
            About The Venue
          </Text>
        </View>
        <View style={[styles.view1, styles.view1SpaceBlock]}>
          <Text style={[styles.experience, styles.experienceFlexBox]}>
            Experience*
          </Text>
        </View>
        <View style={styles.view2}>
          <Text style={[styles.maintainedAClean, styles.experienceFlexBox]}>
            Maintained a clean and organized bar area. Mixed and served
            alcoholic and non-alcoholic drinks according to recipes. Performed
            opening and closing duties, such as restocking bar supplies and
            cleaning. Resolved customer complaints in a friendly and
            professional manner.
          </Text>
        </View>
        <View style={[styles.view1, styles.view1SpaceBlock]}>
          <Text style={[styles.experience, styles.experienceFlexBox]}>
            Skills*
          </Text>
        </View>
        <View style={styles.view2}>
          <Text
            style={[
              styles.communicationFlexibilityTe,
              styles.experienceFlexBox,
            ]}
          >
            Communication, Flexibility, Teamwork, Leadership, Problem solving,
            Maintains inventory, Organizational skills
          </Text>
        </View>
        <View style={styles.view2}>
          <Text
            style={[styles.whichTillSystemContainer, styles.experienceFlexBox]}
          >
            <Text
              style={styles.whichTillSystem}
            >{`Which Till System you have proficiency
on? `}</Text>
            <Text style={styles.optional}>(optional)</Text>
          </Text>
        </View>
        <View style={styles.buttonParent}>
          <Pressable style={styles.button}>
            <Text
              style={[styles.login, styles.loginTypo]}
            >{`Bar Tenders `}</Text>
          </Pressable>
          <Pressable style={[styles.button1, styles.buttonLayout]}>
            <Text style={[styles.barTenders, styles.loginTypo]}>
              Mobile Pos
            </Text>
          </Pressable>
        </View>
        <View style={styles.view1SpaceBlock}>
          <Pressable style={styles.buttonLayout}>
            <Text style={[styles.barTenders, styles.loginTypo]}>
              Cloud Based
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.view6}>
        <Pressable style={styles.button3}>
          <Text style={[styles.login1, styles.login1Text]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  loginTypo1: {
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
  },
  login1Text: {
    color: Color.staffColor,
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 22,
  },
  view1SpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  experienceFlexBox: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    alignSelf: "stretch",
  },
  loginTypo: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  buttonLayout: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    width: 140,
    borderColor: Color.staffColor,
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  statusBar: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    alignSelf: "stretch",
  },
  tellUsA: {
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_mid,
    alignSelf: "stretch",
  },
  aboutTheVenue: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    marginTop: 5,
    alignSelf: "stretch",
  },
  view: {
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  experience: {
    color: Color.colorSlategray_100,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    lineHeight: 22,
    textAlign: "left",
  },
  view1: {
    padding: Padding.p_xl,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    marginTop: 10,
  },
  maintainedAClean: {
    lineHeight: 26,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslateblue,
  },
  view2: {
    borderColor: Color.colorLavender_100,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
    padding: Padding.p_xl,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  communicationFlexibilityTe: {
    lineHeight: 25,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslateblue,
  },
  whichTillSystem: {
    color: Color.colorDarkslateblue,
  },
  optional: {
    color: "#7a7b8e",
  },
  whichTillSystemContainer: {
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.size_mid,
  },
  login: {
    color: Color.color,
    letterSpacing: 0,
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
  },
  button: {
    backgroundColor: Color.staffColor,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    width: 140,
    borderColor: Color.staffColor,
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  barTenders: {
    letterSpacing: 0,
    color: Color.staffColor,
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 22,
    fontFamily: FontFamily.poppinsRegular,
    flex: 1,
  },
  button1: {
    marginLeft: 20,
  },
  buttonParent: {
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "stretch",
  },
  section: {
    paddingVertical: 0,
  },
  login1: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.staffColor,
    flex: 1,
  },
  button3: {
    backgroundColor: Color.color,
    borderColor: Color.color,
    height: 50,
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  view6: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
    alignItems: "center",
    alignSelf: "stretch",
  },
  createProfile3: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default CreateProfile5;
