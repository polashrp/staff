import React, { useMemo } from "react";
import { Pressable, StyleSheet, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type UploadFileType = {
  clarityimageLine?: ImageSourcePropType;

  /** Style props */
  uploadFilePosition?: string;
  uploadFileMarginTop?: number | string;
  uploadFileMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UploadFile = ({
  clarityimageLine,
  uploadFilePosition,
  uploadFileMarginTop,
  uploadFileMarginLeft,
}: UploadFileType) => {
  const uploadFileStyle = useMemo(() => {
    return {
      ...getStyleValue("position", uploadFilePosition),
      ...getStyleValue("marginTop", uploadFileMarginTop),
      ...getStyleValue("marginLeft", uploadFileMarginLeft),
    };
  }, [uploadFilePosition, uploadFileMarginTop, uploadFileMarginLeft]);

  return (
    <Pressable style={[styles.uploadFile, uploadFileStyle]}>
      <Image
        style={styles.clarityimageLineIcon}
        contentFit="cover"
        source={clarityimageLine}
      />
      <Text style={styles.now}>Now</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  clarityimageLineIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  now: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.staffColor,
    textAlign: "left",
    display: "none",
    marginLeft: 10,
  },
  uploadFile: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGhostwhite_100,
    borderStyle: "dashed",
    borderColor: Color.staffColor,
    borderWidth: 1,
    width: 94,
    height: 76,
    flexDirection: "row",
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_xl,
    overflow: "hidden",
  },
});

export default UploadFile;
