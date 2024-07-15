import React, { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type Property1Default2Type = {
  layer1?: ImageSourcePropType;
  jessicaBrown?: string;
  profile?: ImageSourcePropType;

  /** Style props */
  property1DefaultAlignSelf?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default2 = ({
  layer1,
  jessicaBrown,
  profile,
  property1DefaultAlignSelf,
}: Property1Default2Type) => {
  const property1Default3Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", property1DefaultAlignSelf),
    };
  }, [property1DefaultAlignSelf]);

  return (
    <View style={[styles.property1default, property1Default3Style]}>
      <View style={styles.layer1Parent}>
        <Image style={styles.layer1Icon} contentFit="cover" source={layer1} />
        <Text style={[styles.jessicaBrown, styles.starFlexBox]}>
          {jessicaBrown}
        </Text>
      </View>
      <Pressable style={[styles.star, styles.starFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Text style={[styles.text, styles.textLayout]}>5.0 (2k+ review)</Text>
      </Pressable>
      <ImageBackground
        style={styles.profileIcon}
        resizeMode="cover"
        source={profile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textLayout: {
    lineHeight: 22,
    letterSpacing: 0,
  },
  layer1Icon: {
    width: 27,
    height: 43,
    overflow: "hidden",
  },
  jessicaBrown: {
    flex: 1,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.staffColor,
    textAlign: "center",
    display: "flex",
    lineHeight: 22,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  layer1Parent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.color,
    height: 145,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_xl,
    zIndex: 0,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  text: {
    fontSize: FontSize.size_sm,
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
    borderRadius: Border.br_31xl,
    height: 32,
    flexDirection: "row",
    paddingHorizontal: Padding.p_6xs,
    zIndex: 1,
    marginTop: -20,
    paddingVertical: 0,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
  },
  profileIcon: {
    position: "absolute",
    marginLeft: -70,
    top: 42,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 140,
    height: 140,
    zIndex: 2,
  },
  property1default: {
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_81xl,
    paddingBottom: Padding.p_xl,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
});

export default Property1Default2;
