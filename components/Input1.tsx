import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type Input1Type = {
  enterPassword?: string;
  vector?: ImageSourcePropType;

  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Input1 = ({ enterPassword, vector, propMarginTop }: Input1Type) => {
  const inputStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.input, inputStyle]}>
      <Text style={[styles.enterPassword, styles.tFlexBox]}>
        {enterPassword}
      </Text>
      <View style={styles.field}>
        <TextInput
          style={[styles.textinput, styles.tTypo]}
          placeholder="******"
          secureTextEntry={true}
        />
        <Pressable style={styles.eye}>
          <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
          <Text style={[styles.t, styles.tTypo]}>t</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tFlexBox: {
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  tTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.outfitRegular,
  },
  enterPassword: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorSlategray_100,
    alignSelf: "stretch",
  },
  textinput: {
    flex: 1,
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  t: {
    top: -8,
    left: 15,
    color: Color.colorBlack,
    width: 10,
    height: 12,
    display: "none",
    position: "absolute",
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  eye: {
    width: 19,
    height: 16,
  },
  field: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorGhostwhite_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_sm,
    marginTop: 15,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  input: {
    marginTop: 20,
    alignSelf: "stretch",
  },
});

export default Input1;
