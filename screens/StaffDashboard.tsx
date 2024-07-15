import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Toggle } from "@ui-kitten/components";
import Property1Default5 from "../components/Property1Default5";
import Property1StaffCard from "../components/Property1StaffCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const StaffDashboard = () => {
  const [switchchecked, setSwitchchecked] = useState(true);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.staffDashboard}>
      <View style={[styles.statusBar, styles.mapIconFlexBox]} />
      <View style={[styles.view, styles.viewFlexBox]}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
        <ImageBackground
          style={styles.profileIconLayout}
          resizeMode="cover"
          source={require("../assets/property1default.png")}
        />
      </View>
      <View style={[styles.view1, styles.viewFlexBox]}>
        <Text style={styles.availableNow}>Available Now</Text>
        <Property1Default5 property1DefaultPosition="unset" />
      </View>
      <ImageBackground
        style={[styles.mapIcon, styles.mapIconFlexBox]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      >
        <ScrollView
          style={styles.view2}
          horizontal={true}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.viewScrollViewContent}
        >
          <Pressable style={[styles.button, styles.buttonBorder]}>
            <Text style={[styles.all, styles.barTypo]}>All</Text>
          </Pressable>
          <Pressable
            style={[styles.button1, styles.buttonBorder]}
            onPress={() => { }}
          >
            <Text style={[styles.barTenders, styles.barTypo]}>Bar tenders</Text>
          </Pressable>
          <Pressable style={[styles.button1, styles.buttonBorder]}>
            <Text style={[styles.barTenders, styles.barTypo]}>Mixologist</Text>
          </Pressable>
          <Pressable style={[styles.button1, styles.buttonBorder]}>
            <Text style={[styles.barTenders2, styles.barTypo]}>
              Stock runners
            </Text>
          </Pressable>
        </ScrollView>
        <ScrollView
          style={[styles.slider, styles.sliderSpaceBlock]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sliderScrollViewContent}
        >
          <Property1StaffCard
            profile={require("../assets/property1default1.png")}
            vector={require("../assets/vector.png")}
            vector1={require("../assets/vector1.png")}
            vector2={require("../assets/vector2.png")}
            property1StaffCardPosition="unset"
            property1StaffCardMarginTop="unset"
            property1StaffCardAlignSelf="stretch"
            property1StaffCardWidth="unset"
          />
          <Property1StaffCard
            profile={require("../assets/property1default1.png")}
            vector={require("../assets/vector.png")}
            vector1={require("../assets/vector1.png")}
            vector2={require("../assets/vector2.png")}
            property1StaffCardPosition="unset"
            property1StaffCardMarginTop={9}
            property1StaffCardAlignSelf="stretch"
            property1StaffCardWidth="unset"
          />
        </ScrollView>
        <ImageBackground
          style={[styles.profileIcon1, styles.profileIconLayout]}
          resizeMode="cover"
          source={require("../assets/profile.png")}
        />
        <ImageBackground
          style={[styles.profileIcon2, styles.profileIconLayout]}
          resizeMode="cover"
          source={require("../assets/profile.png")}
        />
        <ImageBackground
          style={[styles.profileIcon3, styles.profileIconLayout]}
          resizeMode="cover"
          source={require("../assets/profile.png")}
        />
        <ImageBackground
          style={[styles.profileIcon4, styles.profileIconLayout]}
          resizeMode="cover"
          source={require("../assets/profile.png")}
        />
        <Pressable
          style={[styles.button4, styles.buttonBorder]}
          onPress={() => navigation.navigate("Staff")}
        >
          <Text style={[styles.login, styles.loginClr]}>View all</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  viewScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sliderScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  mapIconFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  viewFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  buttonBorder: {
    justifyContent: "center",
    height: 33,
    borderWidth: 1,
    borderColor: Color.staffColor,
    borderStyle: "solid",
    borderRadius: Border.br_41xl,
    flexDirection: "row",
    alignItems: "center",
  },
  barTypo: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    letterSpacing: 0,
  },
  sliderSpaceBlock: {
    padding: Padding.p_xl,
    alignSelf: "stretch",
  },
  profileIconLayout: {
    width: 40,
    borderRadius: Border.br_81xl,
    height: 40,
  },
  loginClr: {
    color: Color.colorWhite,
    paddingLeft:10,paddingRight:10,
    fontFamily: FontFamily.poppinsRegular,
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
    fontFamily: FontFamily.poppinsRegular,
    textTransform: "capitalize",
    textAlign: "left",
    lineHeight: 22,
  },
  statusBar: {
    alignItems: "center",
    height: 40,
    justifyContent: "space-between",
    backgroundColor: Color.staffColor,
  },
  logoIcon: {
    width: 22,
    height: 27,
  },
  view: {
    backgroundColor: Color.staffColor,
  },
  availableNow: {
    fontSize: FontSize.size_mid,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    color: Color.staffColor,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  view1: {
    backgroundColor: Color.color,
  },
  all: {
    color: Color.colorAquamarine,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    flex: 1,
  },
  button: {
    width: 59,
    backgroundColor: Color.staffColor,
  },
  barTenders: {
    color: Color.staffColor,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    flex: 1,
  },
  button1: {
    width: 140,
    marginLeft: 10,
  },
  barTenders2: {
    color: Color.staffColor,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  view2: {
    backgroundColor: Color.colorGray,
    height: 53,
    maxHeight: 53,
    zIndex: 0,
    alignSelf: "stretch",
    width: "100%",
  },
  slider: {
    height: 323,
    maxHeight: 323,
    zIndex: 1,
    width: "100%",
  },
  profileIcon1: {
    top: 85,
    left: 157,
    zIndex: 2,
    position: "absolute",
  },
  profileIcon2: {
    top: 159,
    left: 224,
    zIndex: 3,
    position: "absolute",
  },
  profileIcon3: {
    top: 172,
    left: 103,
    zIndex: 4,
    position: "absolute",
  },
  profileIcon4: {
    top: 196,
    left: 343,
    zIndex: 5,
    position: "absolute",
  },
  login: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    letterSpacing: 0,
  },
  button4: {
    right: 22,
    bottom: 337,
    zIndex: 6,
    position: "absolute",
    backgroundColor: Color.staffColor,
  },
  mapIcon: {
    flex: 1,
  },
  staffDashboard: {
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.staffColor,
  },
});

export default StaffDashboard;
