import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreateProfile1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.createProfile1}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.createProfile1ScrollViewContent}
    >
      <View style={styles.statusBar} />
      <View style={styles.section}>
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo2.png")}
          />
        </View>
        <View style={[styles.view1, styles.view1FlexBox]}>
          <Text style={[styles.welcomeToDanielle, styles.loginFlexBox]}>
            Welcome To Danielle
          </Text>
          <Text style={[styles.letsGetYour, styles.letsGetYourClr]}>
            Let’s get your profile set up
          </Text>
        </View>
        <View style={styles.view2}>
          <Pressable style={[styles.c1Parent, styles.view1FlexBox]}>
            <View style={styles.c1}>
              <View style={[styles.c11, styles.c11FlexBox]}>
                <ImageBackground
                  style={styles.c1Icon}
                  resizeMode="cover"
                  source={require("../assets/c1.png")}
                />
              </View>
            </View>
            <Text
              style={[styles.clickToUploadContainer, styles.letsGetYourClr]}
            >
              <Text style={styles.clickTo}>{`Click to
`}</Text>
              <Text style={styles.uploadAPhoto}>Upload a Photo</Text>
            </Text>
          </Pressable>
        </View>
        <View style={styles.view3}>
          <Pressable
            style={[styles.button, styles.c11FlexBox]}
            onPress={() => navigation.navigate("CreateProfile5")}
          >
            <Text style={[styles.login, styles.loginTypo]}>Next</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  createProfile1ScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
  },
  view1FlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  loginFlexBox: {
    textAlign: "center",
    color: Color.staffColor,
  },
  letsGetYourClr: {
    color: Color.colorDarkslateblue,
    textAlign: "center",
  },
  c11FlexBox: {
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
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
  view: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  welcomeToDanielle: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
    color: Color.staffColor,
    alignSelf: "stretch",
  },
  letsGetYour: {
    fontSize: FontSize.size_mid,
    marginTop: 5,
    fontFamily: FontFamily.poppinsRegular,
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  view1: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
  },
  c1Icon: {
    width: 130,
    height: 130,
    borderRadius: Border.br_81xl,
  },
  c11: {
    borderColor: Color.staffColor,
    borderWidth: 5,
    width: 150,
    height: 150,
    borderRadius: Border.br_81xl,
  },
  c1: {
    backgroundColor: Color.colorMediumslateblue_200,
    padding: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
  },
  clickTo: {
    fontFamily: FontFamily.outfitRegular,
  },
  uploadAPhoto: {
    fontWeight: "500",
    fontFamily: FontFamily.outfitMedium,
  },
  clickToUploadContainer: {
    fontSize: FontSize.size_lgi,
    marginTop: 10,
  },
  c1Parent: {
    borderRadius: Border.br_3xs,
    backgroundColor: "#faf9ff",
    borderStyle: "dashed",
    borderColor: "#dbd8fc",
    borderWidth: 1.2,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_125xl,
    alignItems: "center",
    overflow: "hidden",
  },
  view2: {
    paddingVertical: Padding.p_11xl,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    flex: 1,
  },
  login: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.staffColor,
    flex: 1,
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.color,
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    alignSelf: "stretch",
  },
  view3: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
    alignItems: "center",
    alignSelf: "stretch",
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
  },
  createProfile1: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default CreateProfile1;
