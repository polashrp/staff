import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import UploadFile from "../components/UploadFile";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreateProfile3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.createProfile5}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.createProfile5Content}
    >
      <View style={styles.statusBar} />
      <View style={styles.section}>
        <View style={[styles.view, styles.viewSpaceBlock1]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo2.png")}
          />
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <Text style={styles.uploadDocuments}>Upload Documents</Text>
          <Text style={[styles.uploadPassportdriversLicens, styles.uploadTypo]}>
            Upload Passport/Drivers License
          </Text>
        </View>
        <View style={[styles.view2, styles.viewSpaceBlock1]}>
          <UploadFile
            clarityimageLine={require("../assets/clarityimageline.png")}
            uploadFilePosition="unset"
            uploadFileMarginTop="unset"
            uploadFileMarginLeft="unset"
          />
          <Text style={[styles.uploadQualifications, styles.uploadTypo]}>
            Upload Qualifications
          </Text>
          <UploadFile
            clarityimageLine={require("../assets/clarityimageline.png")}
            uploadFilePosition="unset"
            uploadFileMarginTop={30}
            uploadFileMarginLeft="unset"
          />
        </View>
        <View style={[styles.view3, styles.viewSpaceBlock]}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("CreateProfile5")}
          >
            <Text style={styles.login}>Next</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  createProfile5Content: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewSpaceBlock1: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  viewSpaceBlock: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
  },
  uploadTypo: {
    color: Color.colorAquamarine,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_lgi,
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
  view: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  uploadDocuments: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    fontSize: FontSize.size_lgi,
    color: Color.staffColor,
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  uploadPassportdriversLicens: {
    marginTop: 20,
  },
  view1: {
    justifyContent: "center",
  },
  uploadQualifications: {
    marginTop: 30,
  },
  view2: {
    paddingVertical: Padding.p_11xl,
    flex: 1,
  },
  login: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.staffColor,
    textTransform: "capitalize",
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  view3: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
  },
  createProfile5: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
});

export default CreateProfile3;
