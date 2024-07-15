import React, { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type Property1Default1Type = {
  mon?: string;
  prop?: string;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultFlex?: number;
  property1DefaultMarginLeft?: number | string;
  property1DefaultBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default1 = ({
  mon,
  prop,
  property1DefaultPosition,
  property1DefaultFlex,
  property1DefaultMarginLeft,
  property1DefaultBackgroundColor,
}: Property1Default1Type) => {
  const property1Default2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("flex", property1DefaultFlex),
      ...getStyleValue("marginLeft", property1DefaultMarginLeft),
      ...getStyleValue("backgroundColor", property1DefaultBackgroundColor),
    };
  }, [
    property1DefaultPosition,
    property1DefaultFlex,
    property1DefaultMarginLeft,
    property1DefaultBackgroundColor,
  ]);

  return (
    <Pressable style={[styles.property1default, property1Default2Style]}>
      <Text style={styles.mon}>{mon}</Text>
      <Text style={styles.mon}>{prop}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mon: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
  property1default: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_200,
    alignItems: "center",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default Property1Default1;
