import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import View1 from "../components/View1";
import Property1StaffCard from "../components/Property1StaffCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Filter = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.filter}>
      <View style={styles.statusBar} />
      <View1
        logo={require("../assets/logo2.png")}
        vectorIconHeight="unset"
        vectorIconMarginTop="unset"
        vectorIconBackgroundColor="#7a77ff"
      />
      <ScrollView
        style={[styles.view, styles.viewFlexBox]}
        horizontal={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.viewScrollViewContent}
      >
        <Pressable style={styles.button}>
          <Text style={[styles.barTenders, styles.barTypo1]}>All</Text>
        </Pressable>
        <Pressable style={[styles.button1, styles.buttonBorder]}>
          <Text style={[styles.barTenders1, styles.barTypo1]}>Bar tenders</Text>
        </Pressable>
        <Pressable style={[styles.button2, styles.buttonBorder]}>
          <Text style={[styles.barTenders2, styles.barTypo]}>Mixologist</Text>
        </Pressable>
        <Pressable style={styles.buttonBorder}>
          <Text style={styles.barTypo}>Stock runners</Text>
        </Pressable>
      </ScrollView>
      <ScrollView
        style={[styles.view1, styles.viewFlexBox]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.viewScrollView1Content}
      >
        <Property1StaffCard
          profile={require("../assets/property1default5.png")}
          vector={require("../assets/vector9.png")}
          vector1={require("../assets/vector18.png")}
          vector2={require("../assets/vector19.png")}
          property1StaffCardPosition="unset"
          property1StaffCardMarginTop="unset"
          property1StaffCardAlignSelf="stretch"
          property1StaffCardWidth="unset"
          onListItemPress={() => navigation.navigate("Establishment1")}
        />
        <Property1StaffCard
          profile={require("../assets/property1default5.png")}
          vector={require("../assets/vector9.png")}
          vector1={require("../assets/vector18.png")}
          vector2={require("../assets/vector19.png")}
          property1StaffCardPosition="unset"
          property1StaffCardMarginTop={10}
          property1StaffCardAlignSelf="stretch"
          property1StaffCardWidth="unset"
          onListItemPress={() => navigation.navigate("Establishment1")}
        />
        <Property1StaffCard
          profile={require("../assets/property1default5.png")}
          vector={require("../assets/vector9.png")}
          vector1={require("../assets/vector18.png")}
          vector2={require("../assets/vector19.png")}
          property1StaffCardPosition="unset"
          property1StaffCardMarginTop={10}
          property1StaffCardAlignSelf="stretch"
          property1StaffCardWidth="unset"
          onListItemPress={() => navigation.navigate("Establishment1")}
        />
        <Property1StaffCard
          profile={require("../assets/property1default5.png")}
          vector={require("../assets/vector9.png")}
          vector1={require("../assets/vector18.png")}
          vector2={require("../assets/vector19.png")}
          property1StaffCardPosition="unset"
          property1StaffCardMarginTop={10}
          property1StaffCardAlignSelf="stretch"
          property1StaffCardWidth="unset"
        />
        <Property1StaffCard
          profile={require("../assets/property1default5.png")}
          vector={require("../assets/vector9.png")}
          vector1={require("../assets/vector18.png")}
          vector2={require("../assets/vector19.png")}
          property1StaffCardPosition="unset"
          property1StaffCardMarginTop={10}
          property1StaffCardAlignSelf="stretch"
          property1StaffCardWidth="unset"
        />
      </ScrollView>
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
  viewScrollView1Content: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewFlexBox: {
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  barTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  buttonBorder: {
    marginLeft: 10,
    justifyContent: "center",
    flexDirection: "row",
    height: 33,
    borderWidth: 1,
    borderColor: Color.staffColor,
    borderStyle: "solid",
    borderRadius: Border.br_41xl,
    alignItems: "center",
  },
  barTypo: {
    color: Color.staffColor,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.staffColor,
    alignSelf: "stretch",
  },
  barTenders: {
    color: Color.color,
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    height: 33,
    borderWidth: 1,
    borderColor: Color.staffColor,
    borderStyle: "solid",
    borderRadius: Border.br_41xl,
    alignItems: "center",
  },
  barTenders1: {
    color: Color.colorWhite,
    flex: 1,
  },
  button1: {
    width: 140,
    marginLeft: 10,
    backgroundColor: Color.staffColor,
  },
  barTenders2: {
    flex: 1,
  },
  button2: {
    width: 140,
    marginLeft: 10,
  },
  view: {
    height: 53,
    maxHeight: 53,
    width: "100%",
  },
  view1: {
    flex: 1,
  },
  filter: {
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Filter;
