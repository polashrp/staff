import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type View3Type = {
  joinAsAnEstablishment?: string;

  /** Style props */
  propBorderStyle?: string;
  propBorderColor?: string;
  propBorderWidth?: number | string;
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const View3 = ({
  joinAsAnEstablishment,
  propBorderStyle,
  propBorderColor,
  propBorderWidth,
  propMarginTop,
}: View3Type) => {
  const view1Style = useMemo(() => {
    return {
      ...getStyleValue("borderStyle", propBorderStyle),
      ...getStyleValue("borderColor", propBorderColor),
      ...getStyleValue("borderWidth", propBorderWidth),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propBorderStyle, propBorderColor, propBorderWidth, propMarginTop]);

  return (
    <View style={[styles.view, styles.viewFlexBox, view1Style]}>
      <View style={styles.viewFlexBox}>
        <Text style={[styles.joinAsAn, styles.joinAsAnTypo]}>
          {joinAsAnEstablishment}
        </Text>
      </View>
      <Pressable style={[styles.button, styles.viewFlexBox]}>
        <Text style={[styles.getStarted, styles.joinAsAnTypo]}>
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  joinAsAnTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  joinAsAn: {
    fontSize: FontSize.size_xl,
    lineHeight: 15,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
  getStarted: {
    flex: 1,
    fontSize: FontSize.size_lgi,
    lineHeight: 22,
    textTransform: "capitalize",
    color: Color.staffColor,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.color,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  view: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 2,
    padding: Padding.p_xl,
  },
});

export default View3;
