import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import View2 from "../components/View2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={styles.statusBar} />
      <View style={styles.section}>
        <View style={styles.viewSpaceBlock}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo2.png")}
          />
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <Text style={styles.signIn}>Sign In</Text>
        </View>
        <View2 />
      </View>
      <View style={[styles.view2, styles.buttonFlexBox1]}>
        <View style={[styles.buttonWrapper, styles.buttonFlexBox1]}>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", {
                screen: "StaffDashboard",
              })
            }
          >
            <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
          </Pressable>
        </View>
        <View style={[styles.buttonContainer, styles.buttonBorder]}>
          <Pressable
            style={styles.buttonFlexBox}
            onPress={() => navigation.navigate("ChooseRegistrationType")}
          >
            <Text style={[styles.dontHaveAnContainer, styles.login1Typo]}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.signup}>Signup</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  buttonFlexBox1: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    height: 50,
    borderRadius: Border.br_6xs,
    flexDirection: "row",
    alignItems: "center",
  },
  login1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
  },
  buttonBorder: {
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  logoIcon: {
    width: 22,
    height: 27,
  },
  signIn: {
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
    flex: 1,
  },
  view1: {
    marginTop: 20,
    alignItems: "center",
  },
  section: {
    alignSelf: "stretch",
  },
  login1: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.staffColor,
    flex: 1,
  },
  button: {
    backgroundColor: Color.color,
    borderColor: Color.color,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  buttonWrapper: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  dontHaveAn: {
    color: Color.colorDarkslategray_100,
  },
  text: {
    color: Color.colorDimgray_200,
  },
  signup: {
    color: Color.staffColor,
  },
  dontHaveAnContainer: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  buttonContainer: {
    borderColor: "#f2f2f2",
    borderTopWidth: 1,
    padding: Padding.p_xl,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
  view2: {
    alignSelf: "stretch",
  },
  login: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default Login;
