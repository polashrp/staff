import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type LocationWhileUsingType = {
  onClose?: () => void;
};

const LocationWhileUsing = ({ onClose }: LocationWhileUsingType) => {
  return (
    <View style={styles.locationWhileUsing}>
      <Text
        style={[styles.allowMesmeristToContainer, styles.whileUsingTheTypo]}
      >
        <Text style={styles.allow}>Allow “</Text>
        <Text style={styles.mesmerist}>Mesmerist</Text>
        <Text style={styles.allow}>{`”
to access this device’s location?`}</Text>
      </Text>
      <View style={styles.locationWhileUsingChild} />
      <Text style={[styles.whileUsingThe, styles.whileUsingTheTypo]}>
        While using the app
      </Text>
      <View style={styles.locationWhileUsingChild} />
      <Text style={[styles.whileUsingThe, styles.whileUsingTheTypo]}>
        Only this time
      </Text>
      <View style={styles.locationWhileUsingChild} />
      <Text style={[styles.whileUsingThe, styles.whileUsingTheTypo]}>Deny</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  whileUsingTheTypo: {
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.size_mid,
  },
  allow: {
    fontFamily: FontFamily.poppinsRegular,
  },
  mesmerist: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  allowMesmeristToContainer: {
    color: Color.colorBlack,
  },
  locationWhileUsingChild: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderTopWidth: 1,
    width: 303,
    height: 1,
    marginTop: 13,
  },
  whileUsingThe: {
    color: Color.colorRoyalblue,
    marginTop: 13,
    fontFamily: FontFamily.poppinsRegular,
  },
  locationWhileUsing: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    width: 302,
    height: 256,
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 17,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default LocationWhileUsing;
