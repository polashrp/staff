import * as React from "react";
import {
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Star from "./Star";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const ReviewItem = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.reviewitem}>
      <Pressable
        style={styles.profileParent}
        onPress={() => navigation.navigate("MyAccount")}
      >
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
      </Pressable>
      <View style={styles.theJokerParent}>
        <Text style={[styles.theJoker, styles.theJokerFlexBox]}>
          Ellis Hopkins
        </Text>
        <Text style={[styles.workingAShift, styles.theJokerFlexBox]}>
          Working a shift at this pub was a delight, the atmosphere was warm and
          inviting, and the manager's attention to detail ensured everything ran
          smoothly.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  theJokerFlexBox: {
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
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
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginLeft: 20,
    alignSelf: "stretch",
  },
  reviewitem: {
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
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
});

export default ReviewItem;
