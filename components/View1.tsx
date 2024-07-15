import React, { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type View1Type = {
  logo?: ImageSourcePropType;

  /** Style props */
  vectorIconHeight?: number | string;
  vectorIconMarginTop?: number | string;
  vectorIconBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const View1 = ({
  logo,
  vectorIconHeight,
  vectorIconMarginTop,
  vectorIconBackgroundColor,
}: View1Type) => {
  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", vectorIconHeight),
      ...getStyleValue("marginTop", vectorIconMarginTop),
      ...getStyleValue("backgroundColor", vectorIconBackgroundColor),
    };
  }, [vectorIconHeight, vectorIconMarginTop, vectorIconBackgroundColor]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.view, viewStyle]}>
      <Pressable style={styles.backbutton} onPress={() => navigation.goBack()}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={styles.t}>T</Text>
      </Pressable>
      <Image style={styles.logoIcon} contentFit="cover" source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 13,
    height: 9,
  },
  t: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.staffColor,
    textAlign: "left",
    display: "none",
    marginLeft: 10,
  },
  backbutton: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logoIcon: {
    width: 22,
    height: 27,
    marginLeft: 10,
  },
  view: {
    alignSelf: "stretch",
    height: 40,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    marginTop: 10,
    flexDirection: "row",
  },
});

export default View1;
