import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

export type Property1WorkableType = {
  /** Style props */
  property1WorkablePosition?: string;
  property1WorkablePadding?: number | string;
  property1WorkableAlignSelf?: string;
  property1WorkablePaddingHorizontal?: number | string;
  property1WorkablePaddingVertical?: number | string;
  property1WorkableMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Workable = ({
  property1WorkablePosition,
  property1WorkablePadding,
  property1WorkableAlignSelf,
  property1WorkablePaddingHorizontal,
  property1WorkablePaddingVertical,
  property1WorkableMarginTop,
}: Property1WorkableType) => {
  const property1WorkableStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1WorkablePosition),
      ...getStyleValue("padding", property1WorkablePadding),
      ...getStyleValue("alignSelf", property1WorkableAlignSelf),
      ...getStyleValue("paddingHorizontal", property1WorkablePaddingHorizontal),
      ...getStyleValue("paddingVertical", property1WorkablePaddingVertical),
      ...getStyleValue("marginTop", property1WorkableMarginTop),
    };
  }, [
    property1WorkablePosition,
    property1WorkablePadding,
    property1WorkableAlignSelf,
    property1WorkablePaddingHorizontal,
    property1WorkablePaddingVertical,
    property1WorkableMarginTop,
  ]);

  return (
    <View style={[styles.property1workable, property1WorkableStyle]}>
      <View style={styles.instanceParent}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector20.png")}
          />
          <Text style={[styles.t, styles.tFlexBox]}>t</Text>
        </View>
        <View
          style={[styles.workableHoursWrapper, styles.daysParentSpaceBlock]}
        >
          <Text style={[styles.workableHours, styles.tFlexBox]}>
            Workable Hours
          </Text>
        </View>
      </View>
      <View style={[styles.daysParent, styles.daysParentSpaceBlock]}>
        <View style={styles.itemtimeFlexBox}>
          <Pressable style={[styles.days1, styles.daysSpaceBlock]}>
            <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
            <Text style={[styles.mon, styles.monTypo]}>13</Text>
          </Pressable>
          <Pressable style={[styles.days2, styles.daysSpaceBlock]}>
            <Text style={[styles.mon, styles.monTypo]}>Tue</Text>
            <Text style={[styles.mon, styles.monTypo]}>14</Text>
          </Pressable>
          <Pressable style={[styles.days3, styles.daysSpaceBlock]}>
            <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
            <Text style={[styles.wed, styles.monTypo]}>15</Text>
          </Pressable>
          <Pressable style={[styles.days2, styles.daysSpaceBlock]}>
            <Text style={[styles.mon, styles.monTypo]}>Thu</Text>
            <Text style={[styles.mon, styles.monTypo]}>16</Text>
          </Pressable>
          <Pressable style={[styles.days2, styles.daysSpaceBlock]}>
            <Text style={[styles.mon, styles.monTypo]}>Fri</Text>
            <Text style={[styles.mon, styles.monTypo]}>17</Text>
          </Pressable>
          <Pressable style={[styles.days2, styles.daysSpaceBlock]}>
            <Text style={[styles.mon, styles.monTypo]}>Sat</Text>
            <Text style={[styles.mon, styles.monTypo]}>18</Text>
          </Pressable>
          <Pressable style={[styles.days2, styles.daysSpaceBlock]}>
            <Text style={[styles.mon, styles.monTypo]}>Sun</Text>
            <Text style={[styles.mon, styles.monTypo]}>19</Text>
          </Pressable>
        </View>
        <View style={styles.times}>
          <View style={[styles.itemtime, styles.itemtimeFlexBox]}>
            <View style={styles.timeShadowBox}>
              <TextInput
                style={[styles.am, styles.tTypo]}
                placeholder="8:00 - 9:00 AM"
                placeholderTextColor="#414070"
              />
            </View>
            <View style={[styles.time1, styles.timeShadowBox]}>
              <TextInput
                style={[styles.am, styles.tTypo]}
                placeholder="8:00 - 9:00 AM"
                placeholderTextColor="#414070"
              />
            </View>
          </View>
          <View style={[styles.itemtime1, styles.itemtimeFlexBox]}>
            <View style={styles.timeShadowBox}>
              <TextInput
                style={[styles.am, styles.tTypo]}
                placeholder="8:00 - 9:00 AM"
                placeholderTextColor="#414070"
              />
            </View>
            <View style={[styles.time3, styles.timeShadowBox]}>
              <TextInput
                style={[styles.am, styles.tTypo]}
                placeholder="8:00 - 9:00 AM"
                placeholderTextColor="#414070"
              />
            </View>
          </View>
          <View style={[styles.itemtime1, styles.itemtimeFlexBox]}>
            <View style={styles.timeShadowBox}>
              <TextInput
                style={[styles.am, styles.tTypo]}
                placeholder="8:00 - 9:00 AM"
                placeholderTextColor="#414070"
              />
            </View>
            <View style={[styles.time5, styles.timeShadowBox]}>
              <TextInput
                style={[styles.am, styles.tTypo]}
                placeholder="8:00 - 9:00 AM"
                placeholderTextColor="#414070"
              />
            </View>
          </View>
          <View style={[styles.itemtime1, styles.itemtimeFlexBox]}>
            <View style={styles.timeShadowBox}>
              <TextInput
                style={[styles.am, styles.tTypo]}
                placeholder="8:00 - 9:00 AM"
                placeholderTextColor="#414070"
              />
            </View>
            <View style={[styles.time7, styles.timeShadowBox]}>
              <TextInput
                style={[styles.am, styles.tTypo]}
                placeholder="8:00 - 9:00 AM"
                placeholderTextColor="#414070"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tFlexBox: {
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  daysParentSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
  },
  daysSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_8xs,
    borderRadius: Border.br_8xs,
    alignItems: "center",
  },
  monTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  itemtimeFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  timeShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_2xl,
    overflow: "hidden",
    width: 151,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(53, 54, 86, 0.15)",
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  vectorIcon: {
    width: 21,
    height: 21,
  },
  t: {
    color: Color.colorBlack,
    display: "none",
    marginLeft: 10,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  vectorParent: {
    flexDirection: "row",
  },
  workableHours: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.staffColor,
    alignSelf: "stretch",
  },
  workableHoursWrapper: {
    marginLeft: 20,
    flex: 1,
  },
  instanceParent: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mon: {
    color: Color.colorDarkslateblue,
  },
  days1: {
    backgroundColor: Color.colorWhitesmoke_200,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_8xs,
    borderRadius: Border.br_8xs,
  },
  days2: {
    backgroundColor: Color.colorWhitesmoke_200,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_8xs,
    borderRadius: Border.br_8xs,
    marginLeft: 10,
  },
  wed: {
    color: Color.colorWhite,
  },
  days3: {
    backgroundColor: Color.staffColor,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_8xs,
    borderRadius: Border.br_8xs,
    marginLeft: 10,
  },
  am: {
    flex: 1,
  },
  time1: {
    marginLeft: 10,
  },
  itemtime: {
    alignItems: "center",
  },
  time3: {
    marginLeft: 10,
  },
  itemtime1: {
    marginTop: 10,
    alignItems: "center",
  },
  time5: {
    marginLeft: 10,
  },
  time7: {
    marginLeft: 10,
  },
  times: {
    marginTop: 10,
    alignItems: "center",
    alignSelf: "stretch",
  },
  daysParent: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  property1workable: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 10,
    elevation: 10,
    borderRadius: Border.br_3xs,
    padding: Padding.p_xl,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    alignSelf: "stretch",
  },
});

export default Property1Workable;
