import React, { useMemo } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type Property1Default4Type = {
  enterEmail?: string;
  danielleJarvisjourrKeyboa?: string;
  danielleJarvisjourrPlaceh?: string;
  showEnterEmail?: boolean;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultMarginTop?: number | string;
  property1DefaultAlignSelf?: string;
  property1DefaultFlex?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default4 = ({
  enterEmail,
  danielleJarvisjourrKeyboa,
  danielleJarvisjourrPlaceh,
  showEnterEmail,
  property1DefaultPosition,
  property1DefaultMarginTop,
  property1DefaultAlignSelf,
  property1DefaultFlex,
}: Property1Default4Type) => {
  const property1Default4Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("marginTop", property1DefaultMarginTop),
      ...getStyleValue("alignSelf", property1DefaultAlignSelf),
      ...getStyleValue("flex", property1DefaultFlex),
    };
  }, [
    property1DefaultPosition,
    property1DefaultMarginTop,
    property1DefaultAlignSelf,
    property1DefaultFlex,
  ]);

  return (
    <View style={[styles.property1default, property1Default4Style]}>
      {showEnterEmail && (
        <Text style={[styles.enterEmail, styles.enterEmailTypo]}>
          {enterEmail}
        </Text>
      )}
      <View style={styles.field}>
        <TextInput
          style={[styles.daniellejarvisjourrapidecom, styles.enterEmailTypo]}
          placeholder={danielleJarvisjourrPlaceh}
          placeholderTextColor="#414070"
          keyboardType={danielleJarvisjourrKeyboa}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  enterEmailTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  enterEmail: {
    letterSpacing: 0,
    lineHeight: 22,
    color: Color.colorSlategray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  daniellejarvisjourrapidecom: {
    flex: 1,
  },
  field: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorGhostwhite_100,
    overflow: "hidden",
    flexDirection: "row",
    padding: Padding.p_sm,
    marginTop: 15,
    alignSelf: "stretch",
  },
  property1default: {
    alignSelf: "stretch",
  },
});

export default Property1Default4;
