import React, { useState } from "react";
import { CheckBox } from "@ui-kitten/components";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Input2 from "./Input2";
import Input1 from "./Input1";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const View2 = () => {
  const [checkBoxchecked, setCheckBoxchecked] = useState(true);

  return (
    <View style={[styles.view, styles.viewSpaceBlock]}>
      <Input2 />
      <Input1
        enterPassword="Enter Password"
        vector={require("../assets/vector6.png")}
      />
      <View style={[styles.view1, styles.view1FlexBox]}>
        <View style={[styles.frameParent, styles.view1FlexBox]}>
          <View style={[styles.checkboxParent, styles.buttonFlexBox]}>
            <CheckBox
              style={styles.checkbox}
              checked={checkBoxchecked}
              onChange={() => setCheckBoxchecked(!checkBoxchecked)}
            />
            <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
              Remember me
            </Text>
          </View>
          <Pressable style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.dontHaveAn, styles.rememberMeTypo]}>
              Forgot Password?
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  view1FlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rememberMeTypo: {
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  checkbox: {
    flexDirection: "row",
  },
  rememberMe: {
    marginLeft: 10,
  },
  checkboxParent: {
    width: 174,
  },
  dontHaveAn: {
    textTransform: "capitalize",
  },
  button: {
    borderRadius: Border.br_6xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    flex: 1,
  },
  view1: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  view: {
    height: 445,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_11xl,
  },
});

export default View2;
