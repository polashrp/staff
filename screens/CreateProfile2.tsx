import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import View1 from "../components/View1";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const CreateProfile2 = () => {
  return (
    <View style={[styles.createProfile2, styles.contentBg]}>
      <View style={styles.statusBar} />
      <View1
        logo={require("../assets/logo2.png")}
        vectorIconHeight={40}
        vectorIconMarginTop="unset"
        vectorIconBackgroundColor="unset"
      />
      <View style={[styles.content, styles.contentBg]}>
        <View style={styles.view}>
          <View style={styles.viewInner}>
            <View style={styles.whatKindOfJobsAreLookingWrapper}>
              <Text style={styles.whatKindOfContainer}>
                <Text style={styles.whatKindOf}>{`What kind of Jobs are
`}</Text>
                <Text style={styles.lookingFor}>Looking for?</Text>
              </Text>
            </View>
          </View>
          <View style={styles.buttongroup}>
            <View style={styles.viewInner}>
              <Pressable style={[styles.button, styles.buttonBorder1]}>
                <Text
                  style={[styles.login, styles.loginTypo]}
                >{`Bar Tenders `}</Text>
              </Pressable>
              <Pressable style={[styles.button1, styles.buttonBorder1]}>
                <Text
                  style={[styles.login, styles.loginTypo]}
                >{`Mixologist `}</Text>
              </Pressable>
              <Pressable style={[styles.button2, styles.buttonBorder]}>
                <Text
                  style={[styles.login2, styles.loginTypo]}
                >{`Baristas `}</Text>
              </Pressable>
            </View>
            <View style={[styles.buttonWrapper, styles.viewSpaceBlock]}>
              <Pressable style={[styles.button3, styles.buttonBorder]}>
                <Text
                  style={[styles.login2, styles.loginTypo]}
                >{`Glass collectors/table cleaner `}</Text>
              </Pressable>
            </View>
            <View style={[styles.buttonWrapper, styles.viewSpaceBlock]}>
              <Pressable style={styles.buttonLayout1}>
                <Text style={[styles.login2, styles.loginTypo]}>
                  Stock Runners
                </Text>
              </Pressable>
              <Pressable style={[styles.button5, styles.buttonBorder]}>
                <Text style={[styles.login5, styles.loginTypo]}>Managers</Text>
              </Pressable>
              <Pressable style={[styles.button6, styles.buttonBorder]}>
                <Text style={[styles.login2, styles.loginTypo]}>Baristas</Text>
              </Pressable>
            </View>
            <View style={[styles.buttonWrapper, styles.viewSpaceBlock]}>
              <Pressable style={[styles.button, styles.buttonBorder1]}>
                <Text
                  style={[styles.login, styles.loginTypo]}
                >{`Bar Tenders `}</Text>
              </Pressable>
              <Pressable style={[styles.button8, styles.buttonLayout1]}>
                <Text
                  style={[styles.login5, styles.loginTypo]}
                >{`Kitchen Porters `}</Text>
              </Pressable>
              <Pressable style={[styles.button9, styles.buttonBorder]}>
                <Text
                  style={[styles.login5, styles.loginTypo]}
                >{`Chefs `}</Text>
              </Pressable>
            </View>
            <View style={styles.viewSpaceBlock}>
              <Pressable style={styles.buttonLayout}>
                <Text
                  style={[styles.login5, styles.loginTypo]}
                >{`Hotel Porter `}</Text>
              </Pressable>
              <Pressable style={[styles.button11, styles.buttonLayout]}>
                <Text style={[styles.login2, styles.loginTypo]}>
                  House Keepers
                </Text>
              </Pressable>
            </View>
            <View style={[styles.buttonWrapper, styles.viewSpaceBlock]}>
              <Pressable style={styles.buttonLayout}>
                <Text style={[styles.login5, styles.loginTypo]}>
                  Waiters/waitress
                </Text>
              </Pressable>
              <Pressable style={[styles.button13, styles.buttonBorder]}>
                <Text style={[styles.login5, styles.loginTypo]}>
                  Wedding planners
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <Pressable style={styles.button14}>
            <Text style={styles.approvalPending}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBg: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  buttonBorder1: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.staffColor,
    borderStyle: "solid",
    backgroundColor: Color.staffColor,
    borderRadius: Border.br_6xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  loginTypo: {
    textTransform: "capitalize",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    lineHeight: 22,
  },
  buttonBorder: {
    borderColor: Color.colorAquamarine,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  viewSpaceBlock: {
    marginTop: 20,
    flexDirection: "row",
  },
  buttonLayout1: {
    width: 150,
    borderColor: Color.colorAquamarine,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  buttonLayout: {
    width: 160,
    borderColor: Color.colorAquamarine,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  statusBar: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  whatKindOf: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.poppinsRegular,
  },
  lookingFor: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_base,
  },
  whatKindOfContainer: {
    color: Color.colorDarkslateblue,
    textAlign: "center",
    lineHeight: 22,
    flex: 1,
  },
  whatKindOfJobsAreLookingWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
    flex: 1,
  },
  viewInner: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  login: {
    color: Color.color,
  },
  button: {
    width: 130,
  },
  button1: {
    width: 95,
    marginLeft: 20,
  },
  login2: {
    color: Color.textColor,
  },
  button2: {
    width: 81,
    marginLeft: 20,
  },
  button3: {
    width: 280,
  },
  buttonWrapper: {
    alignSelf: "stretch",
  },
  login5: {
    color: Color.colorAquamarine,
  },
  button5: {
    width: 98,
    marginLeft: 20,
  },
  button6: {
    width: 82,
    marginLeft: 20,
  },
  button8: {
    marginLeft: 20,
  },
  button9: {
    width: 65,
    marginLeft: 20,
  },
  button11: {
    marginLeft: 20,
  },
  button13: {
    width: 180,
    marginLeft: 20,
  },
  buttongroup: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  view: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    flex: 1,
  },
  approvalPending: {
    fontSize: FontSize.size_lg,
    color: Color.staffColor,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    lineHeight: 22,
    flex: 1,
  },
  button14: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.color,
    height: 47,
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
  view1: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
  },
  createProfile2: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default CreateProfile2;
