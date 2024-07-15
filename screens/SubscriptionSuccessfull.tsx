import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SubscriptionSuccessfull = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.subscriptionSuccessfull}>
      <View style={styles.statusBar} />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.logobigParent, styles.parentFlexBox]}>
          <Image
            style={styles.logobigIcon}
            contentFit="cover"
            source={require("../assets/logo4.png")}
          />
          <Text style={[styles.thankYou, styles.loginFlexBox]}>Thank You</Text>
          <Text style={[styles.forYourFeedback, styles.loginFlexBox]}>
            For Your Feedback
          </Text>
        </View>
        <View style={[styles.view, styles.parentFlexBox]}>
          <Pressable
            style={[styles.button, styles.parentFlexBox]}
            onPress={() => navigation.navigate("MyBookings1")}
          >
            <Text style={[styles.login, styles.loginFlexBox]}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  loginFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  logobigIcon: {
    width: 145,
    height: 173,
  },
  thankYou: {
    fontSize: 30,
    fontWeight: "500",
    fontFamily: FontFamily.outfitMedium,
    color: Color.staffColor,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: 0,
    marginTop: 10,
  },
  forYourFeedback: {
    fontSize: 21,
    lineHeight: 29,
    fontFamily: FontFamily.outfitRegular,
    color: Color.color,
    textAlign: "center",
    letterSpacing: 0,
    marginTop: 10,
  },
  logobigParent: {
    flex: 1,
  },
  login: {
    fontSize: FontSize.size_lg,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.staffColor,
    lineHeight: 22,
    textAlign: "center",
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
  },
  view: {
    padding: Padding.p_xl,
    marginTop: 10,
  },
  frameParent: {
    marginTop: 10,
    flex: 1,
  },
  subscriptionSuccessfull: {
    backgroundColor: Color.staffColor,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default SubscriptionSuccessfull;
