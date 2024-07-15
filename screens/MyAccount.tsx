import * as React from "react";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import MenuItem1 from "../components/MenuItem1";
import MenuItem from "../components/MenuItem";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const MyAccount = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.myAccount}>
      <View style={styles.statusBar} />
      <View style={styles.view}>
        <Pressable
          style={styles.backbuttonShadowBox}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.t, styles.tTypo]}>T</Text>
        </Pressable>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo2.png")}
        />
        <Text style={[styles.myAccount1, styles.tTypo]}>My Account</Text>
        <Pressable style={[styles.backbutton1, styles.backbuttonShadowBox]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={[styles.t, styles.tTypo]}>T</Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.view1}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.viewScrollViewContent}
      >
        <MenuItem1 />
        <MenuItem myBookings="My Bookings" />
        <MenuItem myBookings="Set Rota " />
        <MenuItem myBookings="My Favorites " />
        <MenuItem myBookings="Delete Account" />
      </ScrollView>
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
  tTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    marginLeft: 10,
  },
  backbuttonShadowBox: {
    justifyContent: "center",
    height: 25,
    width: 25,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.staffColor,
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 13,
    height: 9,
  },
  t: {
    fontSize: FontSize.size_mid,
    color: Color.staffColor,
    textAlign: "left",
    display: "none",
    marginLeft: 10,
  },
  logoIcon: {
    width: 22,
    height: 27,
    marginLeft: 10,
  },
  myAccount1: {
    fontSize: FontSize.size_lgi,
    color: Color.color,
    textAlign: "center",
    marginLeft: 10,
    flex: 1,
  },
  vectorIcon1: {
    width: 14,
    height: 14,
  },
  backbutton1: {
    marginLeft: 10,
  },
  view: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.staffColor,
    alignSelf: "stretch",
  },
  view1: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  myAccount: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default MyAccount;
