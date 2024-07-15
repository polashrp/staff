import * as React from "react";
import {
  ScrollView,
  StyleProp,
  ViewStyle,
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

export type CONTENT2Type = {
  style?: StyleProp<ViewStyle>;
};

const CONTENT2 = ({ style }: CONTENT2Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={[styles.viewFlexBox1, style]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cONTENTScrollViewContent}
    >
      <View style={[styles.view, styles.viewFlexBox1]}>
        <Pressable
          style={[styles.listitem, styles.starShadowBox1]}
          onPress={() => navigation.navigate("Establishment3")}
        >
          <View style={styles.profileParent}>
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default5.png")}
            />
            <View style={[styles.star, styles.starFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox2]}>5.0</Text>
            </View>
          </View>
          <View style={styles.mesmeristParent}>
            <Text
              style={[styles.mesmerist, styles.textFlexBox2]}
            >{`Mesmerist `}</Text>
            <View style={[styles.eplocationParent, styles.starFlexBox]}>
              <View style={styles.eplocation}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector18.png")}
                />
                <Image
                  style={styles.vectorIcon2}
                  contentFit="cover"
                  source={require("../assets/vector19.png")}
                />
                <Text style={[styles.t, styles.tTypo3]}>t</Text>
              </View>
              <Text
                style={[styles.princeAlbertSt, styles.tTypo3]}
              >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cONTENTScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewFlexBox1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    alignSelf: "stretch",
  },
  starShadowBox1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  starFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textFlexBox2: {
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 22,
  },
  tTypo3: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    marginLeft: 10,
    textAlign: "left",
    letterSpacing: 0,
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    height: 65,
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.outfitRegular,
    marginLeft: 10,
    color: Color.colorSlategray_100,
  },
  star: {
    shadowRadius: 6,
    elevation: 6,
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    marginTop: -5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  profileParent: {
    alignItems: "center",
  },
  mesmerist: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslateblue,
    alignSelf: "stretch",
  },
  vectorIcon1: {
    width: 23,
    height: 30,
    zIndex: 0,
  },
  vectorIcon2: {
    position: "absolute",
    height: "31.07%",
    width: "31.14%",
    top: "24.85%",
    right: "34.43%",
    bottom: "44.08%",
    left: "34.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    overflow: "hidden",
  },
  t: {
    color: Color.colorBlack,
    display: "none",
    zIndex: 2,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  eplocation: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
    flexDirection: "row",
  },
  princeAlbertSt: {
    lineHeight: 21,
    color: Color.colorSlategray_100,
    flex: 1,
  },
  eplocationParent: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  mesmeristParent: {
    marginLeft: 10,
    flex: 1,
    alignSelf: "stretch",
  },
  listitem: {
    shadowRadius: 10,
    elevation: 10,
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  view: {
    padding: Padding.p_xl,
  },
});

export default CONTENT2;
