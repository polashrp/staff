import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Star = () => {
  return (
    <Pressable style={styles.star}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Text style={styles.text}>5.0 (2k+ review)</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 14,
    height: 14,
  },
  text: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.outfitRegular,
    color: Color.colorSlategray_100,
    textAlign: "left",
    marginLeft: 10,
  },
  star: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    zIndex: 1,
    marginTop: -20,
  },
});

export default Star;
