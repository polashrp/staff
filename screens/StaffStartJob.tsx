import React, { useState, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import View1 from "../components/View1";
import Property1Default2 from "../components/Property1Default2";
import EnterCode from "../components/EnterCode";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const StaffStartJob = () => {
  const [button5Visible, setButton5Visible] = useState(false);

  const openButton5 = useCallback(() => {
    setButton5Visible(true);
  }, []);

  const closeButton5 = useCallback(() => {
    setButton5Visible(false);
  }, []);

  return (
    <>
      <ScrollView
        style={[styles.staffStartJob, styles.vectorIcon3Layout]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.staffStartJobScrollViewContent}
      >
        <View style={styles.statusBar} />
        <View1
          logo={require("../assets/logo2.png")}
          vectorIconHeight="unset"
          vectorIconMarginTop="unset"
          vectorIconBackgroundColor="#7a77ff"
        />
        <View style={styles.content}>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <Property1Default2
              layer1={require("../assets/layer-11.png")}
              jessicaBrown="Mesmerist"
              profile={require("../assets/property1default4.png")}
              property1DefaultAlignSelf="stretch"
            />
          </View>
          <View style={[styles.view1, styles.viewSpaceBlock]}>
            <View style={[styles.typetem, styles.typetemShadowBox]}>
              <View style={[styles.instanceParent, styles.button5Border]}>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIconLayout}
                    contentFit="cover"
                    source={require("../assets/vector13.png")}
                  />
                  <Text style={[styles.t, styles.tTypo]}>t</Text>
                </View>
                <View style={[styles.jobTypeWrapper, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.jobType, styles.jobTypeTypo]}>
                    Job Type
                  </Text>
                </View>
              </View>
              <View
                style={[styles.buttonParent, styles.typetemParentSpaceBlock]}
              >
                <Pressable style={[styles.button, styles.buttonFlexBox1]}>
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
            <View style={[styles.typetem1, styles.typetemParentSpaceBlock]}>
              <View style={[styles.instanceParent, styles.button5Border]}>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.vectorIconLayout}
                    contentFit="cover"
                    source={require("../assets/vector13.png")}
                  />
                  <Text style={[styles.t, styles.tTypo]}>t</Text>
                </View>
                <View style={[styles.addressWrapper, styles.wrapperSpaceBlock]}>
                  <Text style={[styles.address, styles.jobTypeTypo]}>
                    Address
                  </Text>
                </View>
                <Pressable style={[styles.button3, styles.buttonFlexBox]}>
                  <Text style={[styles.dontHaveAn, styles.dontHaveAnTypo]}>
                    view map
                  </Text>
                </Pressable>
              </View>
              <View
                style={[
                  styles.eplocationParent,
                  styles.typetemParentSpaceBlock,
                ]}
              >
                <View style={styles.eplocation}>
                  <Image
                    style={styles.vectorIcon2}
                    contentFit="cover"
                    source={require("../assets/vector18.png")}
                  />
                  <Image
                    style={[styles.vectorIcon3, styles.vectorIcon3Layout]}
                    contentFit="cover"
                    source={require("../assets/vector19.png")}
                  />
                  <Text style={[styles.t2, styles.tTypo]}>t</Text>
                </View>
                <Text style={[styles.princeAlbertSt, styles.dontHaveAnTypo]}>
                  1-3 Prince Albert St, Brighton and Hove, Brighton BN1 1HE
                </Text>
              </View>
            </View>
            <View style={[styles.typetem2, styles.typetemParentSpaceBlock]}>
              <View style={[styles.instanceParent, styles.button5Border]}>
                <Image
                  style={[styles.frameChild, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/frame-277.png")}
                />
                <View style={[styles.jobTypeWrapper, styles.wrapperSpaceBlock]}>
                  <Text
                    style={[styles.jobType, styles.jobTypeTypo]}
                  >{`About Venue `}</Text>
                </View>
              </View>
              <Text style={[styles.barTendersStock, styles.barClr]}>
                Buzzy pub with retro, gin palace-inspired decor, plus regular
                live music and DJs.
              </Text>
            </View>
          </View>
          <Pressable style={[styles.button4, styles.buttonFlexBox1]}>
            <Text style={[styles.approvalPending, styles.loginTypo]}>
              Approval Pending
            </Text>
          </Pressable>
        </View>
        <View style={styles.view2}>
          <Pressable
            style={[styles.button5, styles.buttonFlexBox]}
            onPress={openButton5}
          >
            <Text style={[styles.login, styles.loginTypo]}>Start Job</Text>
          </Pressable>
        </View>
      </ScrollView>

      <Modal animationType="none" transparent visible={button5Visible}>
        <View style={styles.button5Overlay}>
          <Pressable style={styles.button5Bg} onPress={closeButton5} />
          <EnterCode onClose={closeButton5} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  staffStartJobScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon3Layout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  typetemShadowBox: {
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    padding: Padding.p_xl,
    backgroundColor: Color.colorWhite,
  },
  button5Border: {
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  tTypo: {
    display: "none",
    color: Color.colorBlack,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    marginLeft: 20,
    flex: 1,
  },
  jobTypeTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.staffColor,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  typetemParentSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  buttonFlexBox1: {
    height: 33,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  buttonFlexBox: {
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dontHaveAnTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  vectorIconLayout: {
    height: 28,
    width: 27,
  },
  barClr: {
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_base,
  },
  statusBar: {
    backgroundColor: Color.staffColor,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  view: {
    zIndex: 0,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  t: {
    marginLeft: 10,
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobType: {
    color: Color.staffColor,
    alignSelf: "stretch",
  },
  jobTypeWrapper: {
    marginLeft: 20,
  },
  instanceParent: {
    borderColor: Color.colorLightgray,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  barTenders: {
    display: "flex",
    width: 140,
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Color.colorMediumslateblue_100,
    borderRadius: Border.br_41xl,
    height: 33,
  },
  button1: {
    backgroundColor: Color.colorMediumslateblue_100,
    borderRadius: Border.br_41xl,
    height: 33,
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
    color: Color.staffColor,
  },
  addressWrapper: {
    marginLeft: 20,
    flexDirection: "row",
  },
  dontHaveAn: {
    fontSize: FontSize.size_mini,
    color: Color.colorAquamarine,
    textTransform: "capitalize",
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
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
    position: "absolute",
    zIndex: 1,
  },
  t2: {
    zIndex: 2,
    marginLeft: 10,
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
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    flex: 1,
  },
  eplocationParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  typetem1: {
    padding: Padding.p_xl,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  frameChild: {
    overflow: "hidden",
  },
  barTendersStock: {
    marginTop: 10,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  typetem2: {
    padding: Padding.p_xl,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  view1: {
    marginTop: 20,
    zIndex: 1,
  },
  approvalPending: {
    fontSize: FontSize.size_sm,
    color: Color.staffColor,
  },
  button4: {
    top: 15,
    right: 30,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumslateblue_200,
    zIndex: 2,
    position: "absolute",
  },
  content: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  button5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  button5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  login: {
    textTransform: "capitalize",
    color: Color.staffColor,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    flex: 1,
  },
  button5: {
    backgroundColor: Color.color,
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  view2: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
    alignItems: "center",
    alignSelf: "stretch",
  },
  staffStartJob: {
    width: "100%",
    flex: 1,
    maxWidth: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default StaffStartJob;
