import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import Property1Default4 from "./Property1Default4";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

export type EnterCodeType = {
  onClose?: () => void;
};

const EnterCode = ({ onClose }: EnterCodeType) => {
  return (
    <View style={styles.enterCode}>
      <View style={styles.enterCodeChild} />
      <View
        style={[
          styles.pleaseAskCodeFromRotaWrapper,
          styles.inputParentSpaceBlock,
        ]}
      >
        <Text
          style={[styles.pleaseAskCode, styles.loginTypo]}
        >{`Please ask code from Rota `}</Text>
      </View>
      <Text style={[styles.enterCode1, styles.loginClr]}>Enter Code</Text>
      <Image
        style={styles.materialSymbolsLightcloseIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolslightclose.png")}
      />
      <View style={[styles.inputParent, styles.inputParentSpaceBlock]}>
        <Property1Default4
          enterEmail="Enter OTP"
          danielleJarvisjourrPlaceh="20203"
          showEnterEmail={false}
          property1DefaultPosition="unset"
          property1DefaultMarginTop="unset"
          property1DefaultAlignSelf="unset"
          property1DefaultFlex={1}
        />
        <Pressable style={styles.button}>
          <Text style={[styles.login, styles.loginClr]}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputParentSpaceBlock: {
    marginTop: 20,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
  },
  loginClr: {
    color: Color.staffColor,
    lineHeight: 22,
    letterSpacing: 0,
  },
  enterCodeChild: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 46,
    zIndex: 0,
    backgroundColor: Color.color,
    width: 338,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  pleaseAskCode: {
    color: Color.colorDarkslateblue,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
  },
  pleaseAskCodeFromRotaWrapper: {
    paddingVertical: 0,
    zIndex: 1,
    alignItems: "center",
  },
  enterCode1: {
    top: 15,
    left: 18,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    opacity: 0.93,
    zIndex: 2,
    position: "absolute",
    textAlign: "left",
  },
  materialSymbolsLightcloseIcon: {
    top: 14,
    left: 309,
    width: 24,
    height: 24,
    overflow: "hidden",
    zIndex: 3,
    position: "absolute",
  },
  login: {
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
    color: Color.staffColor,
  },
  button: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.staffColor,
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    marginLeft: 20,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.color,
  },
  inputParent: {
    paddingVertical: Padding.p_3xs,
    zIndex: 4,
  },
  enterCode: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    justifyContent: "flex-end",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 338,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
});

export default EnterCode;
