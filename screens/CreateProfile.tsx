import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import View1 from "../components/View1";
import ConnectBank from "../components/ConnectBank";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const CreateProfile = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  const openButton = useCallback(() => {
    setButtonVisible(true);
  }, []);

  const closeButton = useCallback(() => {
    setButtonVisible(false);
  }, []);

  return (
    <>
      <View style={styles.createProfile4}>
        <View style={styles.statusBar} />
        <View1 logo={require("../assets/logo2.png")} />
        <View style={[styles.frameParent, styles.viewSpaceBlock]}>
          <View style={[styles.logobigParent, styles.parentFlexBox]}>
            <Image
              style={styles.logobigIcon}
              contentFit="cover"
              source={require("../assets/logo3.png")}
            />
            <Text style={[styles.inOrderTo, styles.loginFlexBox]}>
              In order to receive payment into your account you will now need to
              connect your bank account. This is done through a secure party,
              Barmily do not have access to you bank details
            </Text>
          </View>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <Pressable
              style={[styles.button, styles.parentFlexBox]}
              onPress={openButton}
            >
              <Text style={[styles.login, styles.loginFlexBox]}>
                Connect Account
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="none" transparent visible={buttonVisible}>
        <View style={styles.buttonOverlay}>
          <Pressable style={styles.buttonBg} onPress={closeButton} />
          <ConnectBank onClose={closeButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  logobigIcon: {
    width: 145,
    height: 173,
  },
  inOrderTo: {
    fontSize: FontSize.size_lgi,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.color,
    marginTop: 10,
    alignSelf: "stretch",
  },
  logobigParent: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
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
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.staffColor,
    flex: 1,
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  view: {
    padding: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  createProfile4: {
    backgroundColor: Color.staffColor,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default CreateProfile;
