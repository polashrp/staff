import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Input2 = () => {
  return (
    <View style={styles.input}>
      <Text style={[styles.enterEmail, styles.enterEmailTypo]}>
        Enter Email
      </Text>
      <View style={styles.field}>
        <TextInput
          style={[styles.daniellejarvisjourrapidecom, styles.enterEmailTypo]}
          placeholder="DanielleJarvis@jourrapide.com"
          placeholderTextColor="#414070"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  enterEmailTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  enterEmail: {
    letterSpacing: 0,
    lineHeight: 22,
    color: Color.colorSlategray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  daniellejarvisjourrapidecom: {
    flex: 1,
  },
  field: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorGhostwhite_100,
    overflow: "hidden",
    flexDirection: "row",
    padding: Padding.p_sm,
    marginTop: 15,
    alignSelf: "stretch",
  },
  input: {
    alignSelf: "stretch",
  },
});

export default Input2;
