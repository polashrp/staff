import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import View5 from "../components/View5";
import View6 from "../components/View6";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Feedback = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.feedback}>
      <View style={[styles.statusBar, styles.buttonFlexBox]} />
      <View5 reviewRating="Feedback" />
      <View style={styles.content}>
        <View style={styles.viewParent}>
          <View6 />
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <View style={[styles.typetem, styles.viewSpaceBlock]}>
              <Text style={styles.jessicaBrownIs}>
                Jessica Brown is very good bar manager she Managed bar very
                well. She has good management how to care of drink program.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.viewSpaceBlock}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("SubscriptionSuccessfull")}
          >
            <Text style={styles.approvalPending}>Send Review</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  viewSpaceBlock: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
  },
  statusBar: {
    backgroundColor: Color.staffColor,
    height: 40,
    justifyContent: "space-between",
  },
  jessicaBrownIs: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    alignSelf: "stretch",
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
  },
  view: {
    marginTop: 20,
  },
  viewParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  approvalPending: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 22,
    color: Color.staffColor,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    flex: 1,
  },
  button: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    height: 47,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  content: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  feedback: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Feedback;
