import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Star from "../components/Star";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const ChatListing = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chatListing}>
      <View style={[styles.statusBar, styles.barFlexBox]} />
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo2.png")}
        />
        <Text style={[styles.chat, styles.chatSpaceBlock]}>Chat</Text>
      </View>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cONTENTScrollViewContent}
      >
        <View style={[styles.view1, styles.viewSpaceBlock]}>
          <Pressable
            style={[styles.listitem, styles.listitemShadowBox]}
            onPress={() => navigation.navigate("SingleChat")}
          >
            <View style={styles.profileParent}>
              <ImageBackground
                style={styles.profileIcon}
                resizeMode="cover"
                source={require("../assets/property1default5.png")}
              />
              <Star
                vector={require("../assets/vector9.png")}
                starPosition="unset"
                starMarginTop={-5}
              />
            </View>
            <View style={[styles.mesmeristParent, styles.chatSpaceBlock]}>
              <Text style={styles.mesmerist}>{`Mesmerist `}</Text>
              <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
                <View style={styles.eplocation}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector18.png")}
                  />
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require("../assets/vector19.png")}
                  />
                  <Text style={[styles.t, styles.tTypo]}>t</Text>
                </View>
                <Text
                  style={[styles.princeAlbertSt, styles.tTypo]}
                >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.listitem1, styles.listitemFlexBox]}
            onPress={() => navigation.navigate("SingleChat")}
          >
            <View style={styles.profileParent}>
              <ImageBackground
                style={styles.profileIcon}
                resizeMode="cover"
                source={require("../assets/property1default5.png")}
              />
              <Star
                vector={require("../assets/vector9.png")}
                starPosition="unset"
                starMarginTop={-5}
              />
            </View>
            <View style={[styles.mesmeristParent, styles.chatSpaceBlock]}>
              <Text style={styles.mesmerist}>{`Mesmerist `}</Text>
              <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
                <View style={styles.eplocation}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector18.png")}
                  />
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require("../assets/vector19.png")}
                  />
                  <Text style={[styles.t, styles.tTypo]}>t</Text>
                </View>
                <Text
                  style={[styles.princeAlbertSt, styles.tTypo]}
                >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.listitem2, styles.listitemFlexBox]}>
            <View style={styles.profileParent}>
              <ImageBackground
                style={styles.profileIcon}
                resizeMode="cover"
                source={require("../assets/property1default5.png")}
              />
              <Star
                vector={require("../assets/vector9.png")}
                starPosition="unset"
                starMarginTop={-5}
              />
            </View>
            <View style={[styles.mesmeristParent, styles.chatSpaceBlock]}>
              <Text style={styles.mesmerist}>{`Mesmerist `}</Text>
              <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
                <View style={styles.eplocation}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector18.png")}
                  />
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require("../assets/vector19.png")}
                  />
                  <Text style={[styles.t, styles.tTypo]}>t</Text>
                </View>
                <Text
                  style={[styles.princeAlbertSt, styles.tTypo]}
                >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.listitem3, styles.listitemFlexBox]}>
            <View style={styles.profileParent}>
              <ImageBackground
                style={styles.profileIcon}
                resizeMode="cover"
                source={require("../assets/property1default5.png")}
              />
              <Star
                vector={require("../assets/vector9.png")}
                starPosition="unset"
                starMarginTop={-5}
              />
            </View>
            <View style={[styles.mesmeristParent, styles.chatSpaceBlock]}>
              <Text style={styles.mesmerist}>{`Mesmerist `}</Text>
              <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
                <View style={styles.eplocation}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector18.png")}
                  />
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require("../assets/vector19.png")}
                  />
                  <Text style={[styles.t, styles.tTypo]}>t</Text>
                </View>
                <Text
                  style={[styles.princeAlbertSt, styles.tTypo]}
                >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.listitem4, styles.listitemFlexBox]}>
            <View style={styles.profileParent}>
              <ImageBackground
                style={styles.profileIcon}
                resizeMode="cover"
                source={require("../assets/property1default5.png")}
              />
              <Star
                vector={require("../assets/vector9.png")}
                starPosition="unset"
                starMarginTop={-5}
              />
            </View>
            <View style={[styles.mesmeristParent, styles.chatSpaceBlock]}>
              <Text style={styles.mesmerist}>{`Mesmerist `}</Text>
              <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
                <View style={styles.eplocation}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector18.png")}
                  />
                  <Image
                    style={styles.vectorIcon1}
                    contentFit="cover"
                    source={require("../assets/vector19.png")}
                  />
                  <Text style={[styles.t, styles.tTypo]}>t</Text>
                </View>
                <Text
                  style={[styles.princeAlbertSt, styles.tTypo]}
                >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
              </View>
            </View>
          </Pressable>
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
  barFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.staffColor,
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  chatSpaceBlock: {
    marginLeft: 10,
    flex: 1,
  },
  listitemShadowBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  listitemFlexBox: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    marginLeft: 10,
    letterSpacing: 0,
  },
  homeTypo: {
    marginTop: 3,
    color: Color.colorWhite,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 22,
  },
  statusBar: {
    height: 40,
    alignItems: "center",
    alignSelf: "stretch",
  },
  logoIcon: {
    width: 22,
    height: 27,
  },
  chat: {
    fontSize: FontSize.size_lgi,
    textAlign: "center",
    color: Color.color,
    letterSpacing: 0,
    marginLeft: 10,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 22,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.staffColor,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
  },
  profileIcon: {
    borderRadius: Border.br_81xl,
    width: 65,
    height: 65,
  },
  profileParent: {
    alignItems: "center",
  },
  mesmerist: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 23,
    height: 30,
    zIndex: 0,
  },
  vectorIcon1: {
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
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  eplocation: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  princeAlbertSt: {
    lineHeight: 21,
    color: Color.colorSlategray_100,
    fontFamily: FontFamily.poppinsRegular,
    flex: 1,
  },
  eplocationParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  mesmeristParent: {
    alignSelf: "stretch",
  },
  listitem: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  listitem1: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  listitem2: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  listitem3: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  listitem4: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
  },
  view1: {
    backgroundColor: Color.colorGray,
    flex: 1,
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
  },
  chatListing: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ChatListing;
