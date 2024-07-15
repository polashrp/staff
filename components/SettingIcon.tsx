import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type SettingIconType = {
  group?: ImageSourcePropType;

  /** Style props */
  settingIconWidth?: number | string;
  settingIconHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SettingIcon = ({
  group,
  settingIconWidth,
  settingIconHeight,
}: SettingIconType) => {
  const settingIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", settingIconWidth),
      ...getStyleValue("height", settingIconHeight),
    };
  }, [settingIconWidth, settingIconHeight]);

  return (
    <View style={[styles.settingicon, settingIconStyle]}>
      <Image style={styles.groupIcon} contentFit="cover" source={group} />
      <Text style={styles.t}>t</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
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
    top: "35.48%",
    left: "29.03%",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  settingicon: {
    width: 31,
    height: 31,
  },
});

export default SettingIcon;
