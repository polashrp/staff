import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type View5Type = {
  reviewRating?: string;
};

const View5 = ({ reviewRating }: View5Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <Pressable
        style={[styles.backbutton, styles.viewFlexBox]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.t, styles.tTypo]}>T</Text>
      </Pressable>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo2.png")}
      />
      <Text style={[styles.reviewRating, styles.tTypo]}>{reviewRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  tTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    marginLeft: 10,
  },
  vectorIcon: {
    width: 13,
    height: 9,
  },
  t: {
    fontSize: FontSize.size_mid,
    color: Color.staffColor,
    textAlign: "left",
    display: "none",
    marginLeft: 10,
  },
  backbutton: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    width: 25,
    height: 25,
    justifyContent: "center",
  },
  logoIcon: {
    width: 22,
    height: 27,
    marginLeft: 10,
  },
  reviewRating: {
    flex: 1,
    fontSize: FontSize.size_lgi,
    color: Color.color,
    textAlign: "center",
    marginLeft: 10,
  },
  view: {
    alignSelf: "stretch",
    backgroundColor: Color.staffColor,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default View5;
