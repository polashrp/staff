import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

export type TypetemType = {
  vector?: ImageSourcePropType;
  jobType?: string;
  barTendersStockRunners?: string;
};

const Typetem = ({ vector, jobType, barTendersStockRunners }: TypetemType) => {
  return (
    <View style={[styles.typetem, styles.typetemSpaceBlock]}>
      <View style={styles.instanceParent}>
        <View style={styles.vectorParent}>
          <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
          <Text style={[styles.t, styles.tFlexBox]}>t</Text>
        </View>
        <View style={styles.jobTypeWrapper}>
          <Text style={[styles.jobType, styles.tFlexBox]}>{jobType}</Text>
        </View>
      </View>
      <Text style={[styles.barTendersStock, styles.tFlexBox]}>
        {barTendersStockRunners}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typetemSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  tFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  t: {
    top: "34.28%",
    left: "23.7%",
    color: Color.colorBlack,
    display: "none",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 22,
    position: "absolute",
  },
  vectorParent: {
    width: 27,
    height: 28,
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
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  barTendersStock: {
    lineHeight: 26,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    marginTop: 10,
    alignSelf: "stretch",
  },
  typetem: {
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
  },
});

export default Typetem;
