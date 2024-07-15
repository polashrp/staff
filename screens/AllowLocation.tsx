import React, { useState, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import LocationWhileUsing from "../components/LocationWhileUsing";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const AllowLocation = () => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openButton = useCallback(() => {
    setButtonVisible(true);
  }, []);

  const closeButton = useCallback(() => {
    setButtonVisible(false);
  }, []);

  return (
    <>
      <ScrollView
        style={styles.allowLocation}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.allowLocationScrollViewContent}
      >
        <View style={[styles.statusBar, styles.view1FlexBox]} />
        <View style={styles.section}>
          <View style={styles.view}>
            <Pressable style={styles.objectsParent}>
              <Image
                style={styles.objectsIcon}
                contentFit="cover"
                source={require("../assets/objects.png")}
              />
              <Text style={styles.mesmeristUsesYourContainer}>
                <Text style={styles.mesmerist}>{`‘Mesmerist’ `}</Text>
                <Text style={styles.usesYourLocation}>
                  uses your location to track when you are on the way to their
                  venue.
                </Text>
              </Text>
            </Pressable>
          </View>
          <View style={[styles.view1, styles.view1FlexBox]}>
            <Pressable
              style={[styles.button, styles.buttonFlexBox]}
              onPress={openButton}
            >
              <Text style={[styles.login, styles.loginTypo]}>Allow Access</Text>
            </Pressable>
            <Pressable
              style={[styles.button1, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("CreateProfile5")}
            >
              <Text style={[styles.dontHaveAn, styles.loginTypo]}>
                No Thanks
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <Modal animationType="none" transparent visible={buttonVisible}>
        <View style={styles.buttonOverlay}>
          <Pressable style={styles.buttonBg} onPress={closeButton} />
          <LocationWhileUsing onClose={closeButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  allowLocationScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view1FlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    flexDirection: "row",
    borderRadius: Border.br_6xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textTransform: "capitalize",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
  },
  objectsIcon: {
    width: 160,
    height: 160,
    overflow: "hidden",
  },
  mesmerist: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  usesYourLocation: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  mesmeristUsesYourContainer: {
    lineHeight: 28,
    color: Color.colorDarkslateblue,
    marginTop: 10,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
  },
  objectsParent: {
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_125xl,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  view: {
    height: 707,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_11xl,
    alignSelf: "stretch",
  },
  buttonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  login: {
    color: Color.staffColor,
    textAlign: "center",
    flex: 1,
  },
  button: {
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
  },
  dontHaveAn: {
    color: "#a7a7a7",
    textAlign: "left",
  },
  button1: {
    height: 22,
    marginTop: 20,
  },
  view1: {
    justifyContent: "flex-end",
    padding: Padding.p_xl,
  },
  section: {
    alignSelf: "stretch",
  },
  allowLocation: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default AllowLocation;
