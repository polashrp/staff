import React, { useMemo } from "react";
import {
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

export type Property1StaffCardType = {
  profile?: ImageSourcePropType;
  vector?: ImageSourcePropType;
  vector1?: ImageSourcePropType;
  vector2?: ImageSourcePropType;

  /** Style props */
  property1StaffCardPosition?: string;
  property1StaffCardMarginTop?: number | string;
  property1StaffCardAlignSelf?: string;
  property1StaffCardWidth?: number | string;

  /** Action props */
  onListItemPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1StaffCard = ({
  profile,
  vector,
  vector1,
  vector2,
  property1StaffCardPosition,
  property1StaffCardMarginTop,
  property1StaffCardAlignSelf,
  property1StaffCardWidth,
  onListItemPress,
}: Property1StaffCardType) => {
  const property1StaffCardStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1StaffCardPosition),
      ...getStyleValue("marginTop", property1StaffCardMarginTop),
      ...getStyleValue("alignSelf", property1StaffCardAlignSelf),
      ...getStyleValue("width", property1StaffCardWidth),
    };
  }, [
    property1StaffCardPosition,
    property1StaffCardMarginTop,
    property1StaffCardAlignSelf,
    property1StaffCardWidth,
  ]);

  return (
    <Pressable
      style={[
        styles.property1staffcard,
        styles.starShadowBox,
        property1StaffCardStyle,
      ]}
      onPress={onListItemPress}
    >
      <View style={styles.profileParent}>
        <ImageBackground
          style={styles.profileIcon}
          resizeMode="cover"
          source={profile}
        />
        <View style={[styles.star, styles.starFlexBox]}>
          <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
          <Text style={[styles.text, styles.textClr]}>5.0</Text>
        </View>
      </View>
      <View style={[styles.mesmeristParent, styles.princeAlbertStFlexBox]}>
        <Text
          style={[styles.mesmerist, styles.textLayout]}
        >{`Mesmerist `}</Text>
        <View style={styles.parentFlexBox}>
          <Pressable style={[styles.button, styles.buttonBorder]}>
            <Text style={[styles.barTenders, styles.barFlexBox]}>
              Bar tenders
            </Text>
          </Pressable>
          <Pressable style={[styles.button1, styles.barFlexBox]}>
            <Text style={[styles.barTenders1, styles.tTypo]}>Mixologist</Text>
          </Pressable>
        </View>
        <View style={[styles.eplocationParent, styles.parentFlexBox]}>
          <View style={styles.eplocation}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={vector1}
            />
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={vector2}
            />
            <Text style={[styles.t, styles.tTypo]}>t</Text>
          </View>
          <Text
            style={[styles.princeAlbertSt, styles.tTypo]}
          >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  starShadowBox: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
  },
  starFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textClr: {
    color: Color.colorSlategray_100,
    textAlign: "left",
  },
  princeAlbertStFlexBox: {
    flex: 1,
    marginLeft: 10,
  },
  textLayout: {
    letterSpacing: 0,
    lineHeight: 22,
  },
  buttonBorder: {
    height: 33,
    borderWidth: 1,
    borderColor: Color.staffColor,
    borderStyle: "solid",
    borderRadius: Border.br_41xl,
    flexDirection: "row",
  },
  barFlexBox: {
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  tTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  parentFlexBox: {
    marginTop: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    height: 65,
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.outfitRegular,
    marginLeft: 10,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  star: {
    shadowRadius: 6,
    elevation: 6,
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    marginTop: -5,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  profileParent: {
    alignItems: "center",
  },
  mesmerist: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslateblue,
    alignSelf: "stretch",
    textAlign: "left",
    lineHeight: 22,
  },
  barTenders: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.staffColor,
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
    width: 140,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  barTenders1: {
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 22,
    color: Color.colorDarkslateblue,
  },
  button1: {
    height: 33,
    borderWidth: 1,
    borderColor: Color.staffColor,
    borderStyle: "solid",
    borderRadius: Border.br_41xl,
    flexDirection: "row",
    marginLeft: 10,
  },
  vectorIcon1: {
    width: 23,
    height: 30,
    zIndex: 0,
  },
  vectorIcon2: {
    position: "absolute",
    height: "31.07%",
    width: "31.14%",
    top: "24.85%",
    // right: "34.43%",
    bottom: "44.08%",
    left: "34.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    overflow: "hidden",
    display:"none"
  },
  t: {
    color: Color.colorBlack,
    display: "none",
    zIndex: 2,
    marginLeft: 10,
    textAlign: "left",
    lineHeight: 22,
  },
  eplocation: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
    flexDirection: "row",
  },
  princeAlbertSt: {
    lineHeight: 21,
    flex: 1,
    marginLeft: 10,
    textAlign: "left",
    color: Color.colorSlategray_100,
  },
  eplocationParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  mesmeristParent: {
    alignSelf: "stretch",
  },
  property1staffcard: {
    shadowRadius: 10,
    elevation: 10,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Property1StaffCard;
