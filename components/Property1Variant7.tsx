import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

export type Property1Variant7Type = {
  clarityimageLine?: ImageSourcePropType;
  clarityimageLine1?: ImageSourcePropType;

  /** Style props */
  property1Variant2Position?: string;
  property1Variant2AlignSelf?: string;
  property1Variant2MarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant7 = ({
  clarityimageLine,
  clarityimageLine1,
  property1Variant2Position,
  property1Variant2AlignSelf,
  property1Variant2MarginTop,
}: Property1Variant7Type) => {
  const property1Variant2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Variant2Position),
      ...getStyleValue("alignSelf", property1Variant2AlignSelf),
      ...getStyleValue("marginTop", property1Variant2MarginTop),
    };
  }, [
    property1Variant2Position,
    property1Variant2AlignSelf,
    property1Variant2MarginTop,
  ]);

  return (
    <View style={[styles.property1variant2, property1Variant2Style]}>
      <View style={styles.instanceParent}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector15.png")}
          />
          <Text style={[styles.t, styles.tTypo]}>t</Text>
        </View>
        <View style={styles.documentsWrapper}>
          <Text style={[styles.documents, styles.nowClr]}>Documents</Text>
        </View>
      </View>
      <Text style={[styles.qualifications, styles.documentsTypo]}>
        Qualifications
      </Text>
      <View style={styles.uploadFileParent}>
        <Pressable style={styles.uploadLayout}>
          <Image
            style={styles.clarityimageLineIcon}
            contentFit="cover"
            source={clarityimageLine}
          />
          <Text style={[styles.now, styles.nowClr]}>Now</Text>
        </Pressable>
        <Pressable style={[styles.uploadFile1, styles.uploadLayout]}>
          <Image
            style={styles.clarityimageLineIcon}
            contentFit="cover"
            source={clarityimageLine1}
          />
          <Text style={[styles.now, styles.nowClr]}>Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  nowClr: {
    color: Color.staffColor,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  documentsTypo: {
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
  },
  uploadLayout: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_10xl,
    height: 76,
    width: 94,
    borderWidth: 1,
    borderColor: Color.staffColor,
    borderStyle: "dashed",
    backgroundColor: Color.colorGhostwhite_100,
    overflow: "hidden",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  vectorIcon: {
    height: "83.23%",
    width: "66.77%",
    top: "8.39%",
    right: "16.45%",
    bottom: "8.39%",
    left: "16.77%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  t: {
    top: "35.48%",
    left: "29.03%",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    display: "none",
    position: "absolute",
  },
  vectorParent: {
    width: 31,
    height: 31,
    overflow: "hidden",
  },
  documents: {
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
  },
  documentsWrapper: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginLeft: 20,
  },
  instanceParent: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  qualifications: {
    color: Color.colorAquamarine,
    height: 33,
    marginTop: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  clarityimageLineIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  now: {
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    marginLeft: 10,
    display: "none",
  },
  uploadFile1: {
    marginLeft: 10,
  },
  uploadFileParent: {
    marginTop: 10,
    flexDirection: "row",
  },
  property1variant2: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_xl,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
  },
});

export default Property1Variant7;
