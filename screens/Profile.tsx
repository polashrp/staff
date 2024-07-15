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
import View5 from "../components/View5";
import Property1Default2 from "../components/Property1Default2";
import Property1Default from "../components/Property1Default";
import Typetem from "../components/Typetem";
import Property1Variant7 from "../components/Property1Variant7";
import { Color, Padding } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={[styles.profile, styles.profileFlexBox]}>
      <View style={styles.statusBar} />
      <View5 reviewRating="Profile" />
      <ScrollView
        style={[styles.content, styles.profileFlexBox]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cONTENTScrollViewContent}
      >
        <View style={[styles.view, styles.viewSpaceBlock]}>
          <Property1Default2
            layer1={require("../assets/layer-1.png")}
            jessicaBrown="Andrew Miles "
            profile={require("../assets/property1default3.png")}
            property1DefaultAlignSelf="stretch"
          />
        </View>
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <Property1Default
            vector={require("../assets/vector13.png")}
            barTendersStockRunners="Waiter"
            property1DefaultPosition="unset"
          />
          <Typetem
            vector={require("../assets/vector14.png")}
            jobType="Experience"
            barTendersStockRunners="Successfully managed a team of 15 bartenders and servers, ensuring  customer satisfaction and maintaining high standards of service and  quality."
          />
          <Typetem
            vector={require("../assets/group.png")}
            jobType="Skills"
            barTendersStockRunners="Communication, Flexibility, Teamwork, Leadership, Problem solving,  Maintains inventory, Organizational skills"
          />
          <Property1Variant7
            clarityimageLine={require("../assets/clarityimageline.png")}
            clarityimageLine1={require("../assets/clarityimageline.png")}
            property1Variant2Position="unset"
            property1Variant2AlignSelf="stretch"
            property1Variant2MarginTop={10}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cONTENTScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profileFlexBox: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  viewSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  statusBar: {
    backgroundColor: Color.staffColor,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  view: {
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
  },
  view1: {
    marginTop: 20,
  },
  content: {
    alignSelf: "stretch",
  },
  profile: {
    width: "100%",
    overflow: "hidden",
  },
});

export default Profile;
