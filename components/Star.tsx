import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type StarType = {
  vector?: ImageSourcePropType;

  /** Style props */
  starPosition?: string;
  starMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Star = ({ vector, starPosition, starMarginTop }: StarType) => {
  const starStyle = useMemo(() => {
    return {
      ...getStyleValue("position", starPosition),
      ...getStyleValue("marginTop", starMarginTop),
    };
  }, [starPosition, starMarginTop]);

  return (
    <View style={[styles.star, starStyle]}>
      <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
      <Text style={styles.text}>5.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 14,
    height: 14,
  },
  text: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.outfitRegular,
    color: Color.colorSlategray_100,
    textAlign: "left",
    marginLeft: 10,
  },
  star: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
  },
});

export default Star;
