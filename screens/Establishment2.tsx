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
import Property1Default2 from "../components/Property1Default2";
import Typetem1 from "../components/Typetem1";
import Property1Workable from "../components/Property1Workable";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Establishment2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={[styles.establishment, styles.vectorIcon3Layout]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.establishmentScrollViewContent}
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
            layer1={require("../assets/layer-12.png")}
            jessicaBrown="Mesmerist"
            profile={require("../assets/property1default4.png")}
            property1DefaultAlignSelf="stretch"
          />
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <View style={[styles.typetem, styles.typetemShadowBox]}>
            <View style={styles.instanceParent}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector13.png")}
                />
                <Text style={[styles.t, styles.tTypo]}>t</Text>
              </View>
              <View style={[styles.jobTypeWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.jobType, styles.jobTypeClr]}>
                  Job Type
                </Text>
              </View>
            </View>
            <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
              <Pressable style={styles.buttonFlexBox1}>
                <Text style={[styles.barTenders, styles.barTypo]}>
                  Bar tenders
                </Text>
              </Pressable>
              <Pressable style={[styles.button1, styles.buttonFlexBox1]}>
                <Text style={[styles.barTenders, styles.barTypo]}>
                  Mixologist
                </Text>
              </Pressable>
              <Pressable style={[styles.button1, styles.buttonFlexBox1]}>
                <Text
                  style={[styles.barTenders, styles.barTypo]}
                >{`Front of House `}</Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.typetem1, styles.parentSpaceBlock]}>
            <View style={styles.instanceParent}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector13.png")}
                />
                <Text style={[styles.t, styles.tTypo]}>t</Text>
              </View>
              <View style={[styles.addressWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.address, styles.jobTypeClr]}>Address</Text>
              </View>
              <Pressable style={styles.button3}>
                <Text style={[styles.dontHaveAn, styles.dontHaveAnTypo]}>
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
          <Typetem1 />
          <Property1Workable
            property1WorkablePosition="unset"
            property1WorkablePadding={20}
            property1WorkableAlignSelf="stretch"
            property1WorkablePaddingHorizontal="unset"
            property1WorkablePaddingVertical="unset"
            property1WorkableMarginTop={10}
          />
          <View style={[styles.view2, styles.parentSpaceBlock]}>
            <Pressable style={[styles.button4, styles.buttonFlexBox]}>
              <Text style={[styles.barTenders3, styles.barTypo]}>Reject</Text>
            </Pressable>
            <Pressable
              style={[styles.button5, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("Avaibility")}
            >
              <Text style={[styles.approvalPending, styles.barTypo]}>
                Accept
              </Text>
            </Pressable>
          </View>
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
    marginLeft: 20,
    paddingHorizontal: 0,
    flex: 1,
  },
  jobTypeClr: {
    color: Color.staffColor,
    fontSize: FontSize.size_lg,
  },
  parentSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  barTypo: {
    textAlign: "center",
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
  dontHaveAnTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
  },
  buttonFlexBox: {
    height: 47,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  statusBar: {
    backgroundColor: Color.staffColor,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  view: {
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    width: 27,
    height: 28,
  },
  t: {
    marginLeft: 10,
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobType: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.staffColor,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  jobTypeWrapper: {
    marginLeft: 20,
  },
  instanceParent: {
    borderColor: Color.colorLightgray,
    borderBottomWidth: 1,
    flexDirection: "row",
    borderStyle: "solid",
    alignItems: "center",
    alignSelf: "stretch",
  },
  barTenders: {
    color: Color.colorDarkslateblue,
    display: "flex",
    width: 140,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
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
    alignSelf: "stretch",
    overflow: "hidden",
  },
  address: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.staffColor,
    textAlign: "left",
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
    textTransform: "capitalize",
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
  },
  button3: {
    borderRadius: Border.br_6xs,
    height: 22,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIcon2: {
    width: 23,
    height: 30,
    zIndex: 0,
  },
  vectorIcon3: {
    position: "absolute",
    height: "31.07%",
    width: "31.14%",
    top: "24.85%",
    right: "34.43%",
    bottom: "44.08%",
    left: "34.43%",
    maxHeight: "100%",
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
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
  barTenders3: {
    color: Color.color,
    textTransform: "capitalize",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    flex: 1,
  },
  button4: {
    borderColor: Color.color,
    borderWidth: 1,
    borderStyle: "solid",
  },
  approvalPending: {
    color: Color.staffColor,
    fontSize: FontSize.size_lg,
    flex: 1,
  },
  button5: {
    backgroundColor: Color.color,
    marginLeft: 10,
  },
  view2: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: 0,
    marginTop: 10,
    flexDirection: "row",
  },
  view1: {
    marginTop: 20,
  },
  content: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  establishment: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Establishment2;
