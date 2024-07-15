import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

export type Property1DefaultType = {
  vector?: ImageSourcePropType;
  barTendersStockRunners?: string;

  /** Style props */
  property1DefaultPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  vector,
  barTendersStockRunners,
  property1DefaultPosition,
}: Property1DefaultType) => {
  const property1Default1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
    };
  }, [property1DefaultPosition]);

  return (
    <View style={[styles.property1default, property1Default1Style]}>
      <View style={[styles.instanceParent, styles.parentFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
          <Text style={[styles.t, styles.tFlexBox]}>t</Text>
        </View>
        <View style={styles.jobTypeWrapper}>
          <Text style={[styles.jobType, styles.tFlexBox]}>Job Type</Text>
        </View>
      </View>
      <Text style={[styles.barTendersStock, styles.tFlexBox]}>
        {barTendersStockRunners}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  tFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  vectorIcon: {
    width: 27,
    height: 28,
  },
  t: {
    color: Color.colorBlack,
    display: "none",
    marginLeft: 10,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 22,
  },
  jobType: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.staffColor,
    lineHeight: 22,
    textAlign: "left",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  jobTypeWrapper: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginLeft: 20,
  },
  instanceParent: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderBottomWidth: 1,
    alignSelf: "stretch",
  },
  barTendersStock: {
    lineHeight: 26,
    color: Color.colorDarkslateblue,
    height: 33,
    marginTop: 10,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  property1default: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_xl,
    alignSelf: "stretch",
  },
});

export default Property1Default;
