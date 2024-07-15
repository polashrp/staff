import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Typetem1 = () => {
  return (
    <View style={styles.typetem}>
      <View style={styles.instanceParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-277.png")}
        />
        <View style={styles.jobTypeWrapper}>
          <Text
            style={[styles.jobType, styles.jobTypeFlexBox]}
          >{`About Venue `}</Text>
        </View>
      </View>
      <Text style={[styles.barTendersStock, styles.jobTypeFlexBox]}>
        Buzzy pub with retro, gin palace-inspired decor, plus regular live music
        and DJs.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  jobTypeFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 27,
    height: 28,
    overflow: "hidden",
  },
  jobType: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.staffColor,
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
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslateblue,
    marginTop: 10,
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
    marginTop: 10,
    alignSelf: "stretch",
  },
});

export default Typetem1;
