import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import View1 from "../components/View1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const CreateProfile4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createProfile4}>
      <View style={styles.statusBar} />
      <View1
        logo={require("../assets/logo2.png")}
        vectorIconHeight={40}
        vectorIconMarginTop={10}
        vectorIconBackgroundColor="unset"
      />
      <View style={[styles.frameParent, styles.viewSpaceBlock]}>
        <View style={[styles.logobigParent, styles.parentFlexBox]}>
          <Image
            style={styles.logobigIcon}
            contentFit="cover"
            source={require("../assets/logo4.png")}
          />
          <Text
            style={[styles.yourProfileHas, styles.loginTypo]}
          >{`Your profile has been sent successfully.
Please wait for establishment
to respond.`}</Text>
        </View>
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Pressable
            style={[styles.button, styles.parentFlexBox]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", {
                screen: "StaffDashboard",
              })
            }
          >
            <Text style={[styles.login, styles.loginTypo]}>Back to Home</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
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
  yourProfileHas: {
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.color,
    marginTop: 10,
    alignSelf: "stretch",
  },
  logobigParent: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
  },
  login: {
    lineHeight: 22,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.staffColor,
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
    alignSelf: "stretch",
    justifyContent: "center",
  },
  view: {
    padding: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  createProfile4: {
    backgroundColor: Color.staffColor,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default CreateProfile4;
