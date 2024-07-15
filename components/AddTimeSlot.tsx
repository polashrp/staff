import * as React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import Time from "./Time";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

export type AddTimeSlotType = {
  onClose?: () => void;
};

const AddTimeSlot = ({ onClose }: AddTimeSlotType) => {
  return (
    <View style={styles.addTimeSlot}>
      <View style={styles.monParent}>
        <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
        <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
        <Text style={[styles.wed, styles.tueTypo]}>Wed</Text>
        <Text style={[styles.tue, styles.tueTypo]}>Thu</Text>
        <Text style={[styles.tue, styles.tueTypo]}>Fri</Text>
        <Text style={[styles.tue, styles.tueTypo]}>Sat</Text>
        <Text style={[styles.tue, styles.tueTypo]}>Sun</Text>
      </View>
      <View style={[styles.timeParent, styles.timeParentSpaceBlock]}>
        <Time
          timePosition="unset"
          timeElevation={8}
          timeBackgroundColor="#fff"
          timeWidth="unset"
          timeMarginLeft="unset"
        />
        <Image
          style={styles.systemUiconsarrowUp}
          contentFit="cover"
          source={require("../assets/systemuiconsarrowup.png")}
        />
        <Time
          timePosition="unset"
          timeElevation={8}
          timeBackgroundColor="#fff"
          timeWidth="unset"
          timeMarginLeft="unset"
        />
      </View>
      <View style={[styles.startTimeParent, styles.buttonSpaceBlock]}>
        <Text style={[styles.startTime, styles.startTimeTypo]}>Start Time</Text>
        <Text style={[styles.startTime, styles.startTimeTypo]}>End Time</Text>
      </View>
      <View style={[styles.view, styles.timeParentSpaceBlock]}>
        <Pressable style={[styles.button, styles.buttonSpaceBlock]}>
          <Text style={[styles.approvalPending, styles.startTimeTypo]}>
            Save Slot
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  tueTypo: {
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  timeParentSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  buttonSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
  },
  startTimeTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  mon: {
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    fontSize: FontSize.size_base,
    flex: 1,
  },
  tue: {
    color: Color.colorDarkslateblue,
  },
  wed: {
    color: Color.colorAquamarine,
  },
  monParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  systemUiconsarrowUp: {
    width: 29,
    height: 29,
    overflow: "hidden",
  },
  timeParent: {
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  startTime: {
    color: Color.colorSlategray_100,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
  },
  startTimeParent: {
    marginTop: 20,
    alignSelf: "stretch",
    justifyContent: "space-between",
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
    justifyContent: "center",
    flex: 1,
  },
  view: {
    padding: Padding.p_xl,
    flexDirection: "row",
  },
  addTimeSlot: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    width: 430,
    height: 265,
    paddingVertical: Padding.p_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    paddingHorizontal: Padding.p_xl,
  },
});

export default AddTimeSlot;
