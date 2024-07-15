import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Text,
} from "react-native";
import { Image } from "expo-image";
import View5 from "../components/View5";
import ReviewItem from "../components/ReviewItem";
import Star from "../components/Star";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const StablishmentReview = () => {
  return (
    <View style={[styles.stablishmentReview, styles.viewBg]}>
      <View style={styles.statusBar} />
      <View5 reviewRating={`Review & Rating`} />
      <ScrollView
        style={[styles.view, styles.viewBg]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.viewScrollViewContent}
      >
        <ReviewItem />
        <View style={[styles.reviewitem, styles.reviewitemSpaceBlock]}>
          <View style={styles.profileParent}>
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default2.png")}
            />
            <Star
              vector={require("../assets/vector9.png")}
              starPosition="unset"
              starMarginTop={-5}
            />
          </View>
          <View style={styles.theJokerParent}>
            <Text style={[styles.theJoker, styles.theJokerFlexBox]}>
              Alicia Horton
            </Text>
            <Text style={[styles.workingAShift, styles.theJokerFlexBox]}>
              Working a shift at this pub was a delight, the atmosphere was warm
              and inviting, and the manager's attention to detail ensured
              everything ran smoothly.
            </Text>
          </View>
        </View>
        <View style={[styles.reviewitem1, styles.reviewitemSpaceBlock]}>
          <View style={styles.profileParent}>
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default2.png")}
            />
            <Star
              vector={require("../assets/vector9.png")}
              starPosition="unset"
              starMarginTop={-5}
            />
          </View>
          <View style={styles.theJokerParent}>
            <Text
              style={[styles.theJoker, styles.theJokerFlexBox]}
            >{`The Joker `}</Text>
            <Text style={[styles.workingAShift, styles.theJokerFlexBox]}>
              Working a shift at this pub was a delight, the atmosphere was warm
              and inviting, and the manager's attention to detail ensured
              everything ran smoothly.
            </Text>
          </View>
        </View>
        <View style={[styles.reviewitem2, styles.reviewitemSpaceBlock]}>
          <View style={styles.profileParent}>
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default2.png")}
            />
            <Star
              vector={require("../assets/vector9.png")}
              starPosition="unset"
              starMarginTop={-5}
            />
          </View>
          <View style={styles.theJokerParent}>
            <Text
              style={[styles.theJoker, styles.theJokerFlexBox]}
            >{`The Joker `}</Text>
            <Text style={[styles.workingAShift, styles.theJokerFlexBox]}>
              Working a shift at this pub was a delight, the atmosphere was warm
              and inviting, and the manager's attention to detail ensured
              everything ran smoothly.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewBg: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  reviewitemSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  theJokerFlexBox: {
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  statusBar: {
    backgroundColor: Color.staffColor,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    height: 65,
  },
  profileParent: {
    alignItems: "center",
  },
  theJoker: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.staffColor,
  },
  workingAShift: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorSlategray_100,
    height: 110,
    marginTop: 10,
    alignSelf: "stretch",
  },
  theJokerParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginLeft: 20,
    alignSelf: "stretch",
    flex: 1,
  },
  reviewitem: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 10,
    backgroundColor: Color.colorWhite,
  },
  reviewitem1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 10,
    backgroundColor: Color.colorWhite,
  },
  reviewitem2: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 10,
    backgroundColor: Color.colorWhite,
  },
  view: {
    alignSelf: "stretch",
    flex: 1,
  },
  stablishmentReview: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default StablishmentReview;
