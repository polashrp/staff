import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import View1 from "../components/View1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const TermsConditions = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.termsConditions}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.termsConditionsContent}
    >
      <View style={[styles.statusBar, styles.view2FlexBox]} />
      <View style={styles.section}>
        <View1
          logo={require("../assets/logo2.png")}
          vectorIconHeight="unset"
          vectorIconMarginTop="unset"
          vectorIconBackgroundColor="unset"
        />
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Text style={styles.acceptTerms}>{`Accept Terms & Conditions`}</Text>
        </View>
        <View style={[styles.view1, styles.view1FlexBox]}>
          <Text style={styles.thereTypo}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </Text>
          <Text
            style={[styles.thereAreMany1, styles.thereTypo]}
          >{`There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are  going to use a passage of Lorem Ipsum, you need to be sure there isn't  anything embarrassing hidden in the middle of text. `}</Text>
        </View>
      </View>
      <View style={[styles.view2, styles.view2FlexBox]}>
        <Pressable
          style={[styles.button, styles.view1FlexBox]}
          onPress={() => navigation.navigate("CreateProfile1")}
        >
          <Text style={styles.login}>Yes, I agree</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  termsConditionsContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view2FlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    marginTop: 10,
  },
  view1FlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  thereTypo: {
    color: Color.colorDarkslateblue,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
  },
  acceptTerms: {
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  view: {
    paddingVertical: Padding.p_3xs,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  thereAreMany1: {
    marginTop: 10,
  },
  view1: {
    paddingVertical: 0,
    marginTop: 10,
    paddingHorizontal: Padding.p_xl,
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
  },
  login: {
    fontSize: FontSize.size_lg,
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  view2: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
  },
  termsConditions: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
});

export default TermsConditions;
