import React, { useMemo } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

export type TimeType = {
  /** Style props */
  timePosition?: string;
  timeElevation?: number | string;
  timeBackgroundColor?: string;
  timeWidth?: number | string;
  timeMarginLeft?: number | string;
  timeFlex?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Time = ({
  timePosition,
  timeElevation,
  timeBackgroundColor,
  timeWidth,
  timeMarginLeft,
  timeFlex,
}: TimeType) => {
  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", timePosition),
      ...getStyleValue("elevation", timeElevation),
      ...getStyleValue("backgroundColor", timeBackgroundColor),
      ...getStyleValue("width", timeWidth),
      ...getStyleValue("marginLeft", timeMarginLeft),
      ...getStyleValue("flex", timeFlex),
    };
  }, [
    timePosition,
    timeElevation,
    timeBackgroundColor,
    timeWidth,
    timeMarginLeft,
    timeFlex,
  ]);

  return (
    <View style={[styles.time, timeStyle]}>
      <TextInput
        style={styles.am}
        placeholder="8:00 - 9:00 AM"
        placeholderTextColor="#414070"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  am: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  time: {
    shadowColor: "rgba(53, 54, 86, 0.15)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_base,
  },
});

export default Time;
