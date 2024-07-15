import React, { useState, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import View5 from "../components/View5";
import Property1Default1 from "../components/Property1Default1";
import Time from "../components/Time";
import AddTimeSlot from "../components/AddTimeSlot";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Avaibility = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  const openButton = useCallback(() => {
    setButtonVisible(true);
  }, []);

  const closeButton = useCallback(() => {
    setButtonVisible(false);
  }, []);

  return (
    <>
      <ScrollView
        style={styles.avaibility}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.avaibilityScrollViewContent}
      >
        <View style={styles.statusBar} />
        <View5 reviewRating="Set My Availability" />
        <View style={styles.content}>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <View style={[styles.typetem, styles.typetemSpaceBlock]}>
              <View style={[styles.days, styles.daysFlexBox]}>
                <Property1Default1
                  mon="Mon"
                  prop="13"
                  property1DefaultPosition="unset"
                  property1DefaultFlex={1}
                  property1DefaultMarginLeft="unset"
                  property1DefaultBackgroundColor="#f4f4f4"
                />
                <Property1Default1
                  mon="Tue"
                  prop="14"
                  property1DefaultPosition="unset"
                  property1DefaultFlex={1}
                  property1DefaultMarginLeft={10}
                  property1DefaultBackgroundColor="#f4f4f4"
                />
                <Property1Default1
                  mon="Wed"
                  prop="15"
                  property1DefaultPosition="unset"
                  property1DefaultFlex={1}
                  property1DefaultMarginLeft={10}
                  property1DefaultBackgroundColor="#7a77ff"
                />
                <Property1Default1
                  mon="Thu"
                  prop="16"
                  property1DefaultPosition="unset"
                  property1DefaultFlex={1}
                  property1DefaultMarginLeft={10}
                  property1DefaultBackgroundColor="#f4f4f4"
                />
                <Property1Default1
                  mon="Fri"
                  prop="17"
                  property1DefaultPosition="unset"
                  property1DefaultFlex={1}
                  property1DefaultMarginLeft={10}
                  property1DefaultBackgroundColor="#f4f4f4"
                />
                <Property1Default1
                  mon="Sat"
                  prop="18"
                  property1DefaultPosition="unset"
                  property1DefaultFlex={1}
                  property1DefaultMarginLeft={10}
                  property1DefaultBackgroundColor="#f4f4f4"
                />
                <Property1Default1
                  mon="Sun"
                  prop="19"
                  property1DefaultPosition="unset"
                  property1DefaultFlex={1}
                  property1DefaultMarginLeft={10}
                  property1DefaultBackgroundColor="#f4f4f4"
                />
              </View>
            </View>
            <View style={[styles.typetem1, styles.typetemSpaceBlock]}>
              <View style={styles.times}>
                <View style={styles.timeeditShadowBox}>
                  <Time
                    timePosition="unset"
                    timeBackgroundColor="unset"
                    timeWidth="unset"
                    timeMarginLeft="unset"
                  />
                  <View style={[styles.feeditParent, styles.view1FlexBox]}>
                    <Pressable style={styles.feeditLayout}>
                      <Image
                        style={[styles.vectorIcon, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector30.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.materialSymbolsLightdelete,
                        styles.feeditLayout,
                      ]}
                    >
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector31.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={[styles.timeedit1, styles.timeeditShadowBox]}>
                  <Time
                    timePosition="unset"
                    timeBackgroundColor="unset"
                    timeWidth="unset"
                    timeMarginLeft="unset"
                  />
                  <View style={[styles.feeditParent, styles.view1FlexBox]}>
                    <Pressable style={styles.feeditLayout}>
                      <Image
                        style={[styles.vectorIcon, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector30.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.materialSymbolsLightdelete,
                        styles.feeditLayout,
                      ]}
                    >
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector31.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={[styles.timeedit2, styles.timeeditShadowBox]}>
                  <Time
                    timePosition="unset"
                    timeBackgroundColor="unset"
                    timeWidth="unset"
                    timeMarginLeft="unset"
                  />
                  <View style={[styles.feeditParent, styles.view1FlexBox]}>
                    <Pressable style={styles.feeditLayout}>
                      <Image
                        style={[styles.vectorIcon, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector30.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.materialSymbolsLightdelete,
                        styles.feeditLayout,
                      ]}
                    >
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector31.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={[styles.timeedit3, styles.timeeditShadowBox]}>
                  <Time
                    timePosition="unset"
                    timeBackgroundColor="unset"
                    timeWidth="unset"
                    timeMarginLeft="unset"
                  />
                  <View style={[styles.feeditParent, styles.view1FlexBox]}>
                    <Pressable style={styles.feeditLayout}>
                      <Image
                        style={[styles.vectorIcon, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector30.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.materialSymbolsLightdelete,
                        styles.feeditLayout,
                      ]}
                    >
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector31.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                  </View>
                </View>
                <View style={[styles.timeedit4, styles.timeeditShadowBox]}>
                  <Time
                    timePosition="unset"
                    timeBackgroundColor="unset"
                    timeWidth="unset"
                    timeMarginLeft="unset"
                  />
                  <View style={[styles.feeditParent, styles.view1FlexBox]}>
                    <Pressable style={styles.feeditLayout}>
                      <Image
                        style={[styles.vectorIcon, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector30.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.materialSymbolsLightdelete,
                        styles.feeditLayout,
                      ]}
                    >
                      <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require("../assets/vector31.png")}
                      />
                      <Text style={[styles.t, styles.tTypo]}>t</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.view1, styles.view1FlexBox]}>
            <Pressable
              style={[styles.button, styles.daysFlexBox]}
              onPress={openButton}
            >
              <Text style={[styles.approvalPending, styles.tTypo]}>
                Add Time Slot
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <Modal animationType="none" transparent visible={buttonVisible}>
        <View style={styles.buttonOverlay}>
          <Pressable style={styles.buttonBg} onPress={closeButton} />
          <AddTimeSlot onClose={closeButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  avaibilityScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
  },
  typetemSpaceBlock: {
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  daysFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  view1FlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  feeditLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  timeeditShadowBox: {
    borderWidth: 0.5,
    borderRadius: Border.br_7xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  statusBar: {
    backgroundColor: Color.staffColor,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  days: {
    alignSelf: "stretch",
  },
  typetem: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 10,
    elevation: 10,
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_3xs,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_3xs,
  },
  vectorIcon: {
    height: "83.33%",
    width: "66.67%",
    top: "8.33%",
    right: "16.67%",
    bottom: "8.33%",
    left: "16.67%",
  },
  t: {
    top: "45.83%",
    left: "37.5%",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    display: "none",
    position: "absolute",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  vectorIcon1: {
    height: "65.83%",
    width: "58.33%",
    top: "17.5%",
    right: "20.83%",
    bottom: "16.67%",
    left: "20.83%",
  },
  materialSymbolsLightdelete: {
    marginLeft: 20,
  },
  feeditParent: {
    alignItems: "center",
  },
  timeedit1: {
    marginTop: 10,
  },
  timeedit2: {
    marginTop: 10,
  },
  timeedit3: {
    marginTop: 10,
  },
  timeedit4: {
    marginTop: 10,
  },
  times: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  typetem1: {
    paddingHorizontal: 0,
    marginTop: 10,
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_3xs,
    flex: 1,
  },
  view: {
    alignSelf: "stretch",
  },
  buttonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  approvalPending: {
    fontSize: FontSize.size_lg,
    color: Color.staffColor,
    textAlign: "center",
    flex: 1,
  },
  button: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.color,
    height: 47,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    flex: 1,
  },
  view1: {
    padding: Padding.p_xl,
    marginTop: 20,
  },
  content: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  avaibility: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Avaibility;
