import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
  Text,
} from "react-native";
import { Image } from "expo-image";
import View5 from "../components/View5";
import Star from "../components/Star";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const EstabilsmentRequest = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.estabilsmentRequest}>
      <View style={[styles.statusBar, styles.barFlexBox]} />
      <View5 reviewRating="Rota Request" />
      <View style={styles.content}>
        <ScrollView
          style={styles.view}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.viewScrollViewContent}
        >
          <Pressable style={styles.listitem}>
            <View style={styles.frameParent}>
              <View style={styles.profileParent}>
                <ImageBackground
                  style={styles.profileIcon}
                  resizeMode="cover"
                  source={require("../assets/property1default5.png")}
                />
                <Star
                  vector={require("../assets/vector9.png")}
                  starPosition="unset"
                  starMarginTop={-5}
                />
              </View>
              <View style={styles.mesmeristParent}>
                <Text style={styles.mesmerist}>{`Mesmerist `}</Text>
                <View style={[styles.eplocationParent, styles.buttonFlexBox]}>
                  <View style={styles.eplocation}>
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require("../assets/vector18.png")}
                    />
                    <Image
                      style={styles.vectorIcon1}
                      contentFit="cover"
                      source={require("../assets/vector19.png")}
                    />
                    <Text style={[styles.t, styles.tTypo]}>t</Text>
                  </View>
                  <Text
                    style={[styles.princeAlbertSt, styles.tTypo]}
                  >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("Establishment2")}
            >
              <Text style={styles.login}>Visit Profile</Text>
            </Pressable>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  barFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.staffColor,
  },
  buttonFlexBox: {
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  tTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    letterSpacing: 0,
    marginLeft: 10,
  },
  homeTypo: {
    marginTop: 3,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    textAlign: "left",
    lineHeight: 22,
  },
  messageTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 22,
  },
  statusBar: {
    height: 40,
    alignItems: "center",
    alignSelf: "stretch",
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    height: 65,
  },
  profileParent: {
    alignItems: "center",
  },
  mesmerist: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 22,
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 23,
    height: 30,
    zIndex: 0,
  },
  vectorIcon1: {
    position: "absolute",
    height: "31.07%",
    width: "31.14%",
    top: "24.85%",
    right: "34.43%",
    bottom: "44.08%",
    left: "34.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    overflow: "hidden",
  },
  t: {
    color: Color.colorBlack,
    display: "none",
    zIndex: 2,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  eplocation: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  princeAlbertSt: {
    lineHeight: 21,
    color: Color.colorSlategray_100,
    fontFamily: FontFamily.poppinsRegular,
    flex: 1,
  },
  eplocationParent: {
    alignSelf: "stretch",
  },
  mesmeristParent: {
    marginLeft: 10,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    height: 82,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  login: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    color: Color.colorWhite,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    letterSpacing: 0,
  },
  button: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.staffColor,
    borderWidth: 1,
    height: 33,
    backgroundColor: Color.staffColor,
    justifyContent: "center",
  },
  listitem: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    justifyContent: "flex-end",
    padding: Padding.p_3xs,
    alignItems: "flex-end",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  view: {
    backgroundColor: Color.colorGray,
    alignSelf: "stretch",
    flex: 1,
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
  },
  estabilsmentRequest: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default EstabilsmentRequest;
