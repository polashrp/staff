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
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

export type CONTENTType = {
  style?: StyleProp<ViewStyle>;
};

const CONTENT = ({ style }: CONTENTType) => {
  return (
    <ScrollView
      style={[styles.content, style, styles.viewBg]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cONTENTScrollViewContent}
    >
      <View style={[styles.view, styles.viewBg]}>
        <Pressable style={[styles.listitem, styles.listitemShadowBox]}>
          <View style={styles.profileParent}>
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default5.png")}
            />
            <View style={styles.starShadowBox}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>5.0</Text>
            </View>
          </View>
          <View style={styles.mesmeristParent}>
            <Text
              style={[styles.mesmerist, styles.textFlexBox]}
            >{`Mesmerist `}</Text>
            <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
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
                <Text style={[styles.t, styles.tTypo]}>t</Text>
              </View>
              <Text
                style={[styles.princeAlbertSt, styles.tTypo]}
              >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.listitem1, styles.listitemFlexBox]}>
          <View style={styles.profileParent}>
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default5.png")}
            />
            <View style={styles.starShadowBox}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>5.0</Text>
            </View>
          </View>
          <View style={styles.mesmeristParent}>
            <Text
              style={[styles.mesmerist, styles.textFlexBox]}
            >{`Mesmerist `}</Text>
            <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
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
            <View style={styles.starShadowBox}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>5.0</Text>
            </View>
          </View>
          <View style={styles.mesmeristParent}>
            <Text
              style={[styles.mesmerist, styles.textFlexBox]}
            >{`Mesmerist `}</Text>
            <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
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
            <View style={styles.starShadowBox}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>5.0</Text>
            </View>
          </View>
          <View style={styles.mesmeristParent}>
            <Text
              style={[styles.mesmerist, styles.textFlexBox]}
            >{`Mesmerist `}</Text>
            <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
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
            <View style={styles.starShadowBox}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>5.0</Text>
            </View>
          </View>
          <View style={styles.mesmeristParent}>
            <Text
              style={[styles.mesmerist, styles.textFlexBox]}
            >{`Mesmerist `}</Text>
            <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
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
                <Text style={[styles.t, styles.tTypo]}>t</Text>
              </View>
              <Text
                style={[styles.princeAlbertSt, styles.tTypo]}
              >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.listitem5, styles.listitemFlexBox]}>
          <View style={styles.profileParent}>
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default5.png")}
            />
            <View style={styles.starShadowBox}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>5.0</Text>
            </View>
          </View>
          <View style={styles.mesmeristParent}>
            <Text
              style={[styles.mesmerist, styles.textFlexBox]}
            >{`Mesmerist `}</Text>
            <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
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
                <Text style={[styles.t, styles.tTypo]}>t</Text>
              </View>
              <Text
                style={[styles.princeAlbertSt, styles.tTypo]}
              >{`1-3 Prince Albert St, Brighton
and Hove, Brighton BN1 1HE`}</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.listitem6, styles.listitemFlexBox]}>
          <View style={styles.profileParent}>
            <ImageBackground
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/property1default5.png")}
            />
            <View style={styles.starShadowBox}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>5.0</Text>
            </View>
          </View>
          <View style={styles.mesmeristParent}>
            <Text
              style={[styles.mesmerist, styles.textFlexBox]}
            >{`Mesmerist `}</Text>
            <View style={[styles.eplocationParent, styles.listitemFlexBox]}>
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
  );
};

const styles = StyleSheet.create({
  cONTENTScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewBg: {
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
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
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 22,
  },
  listitemFlexBox: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tTypo: {
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
  starShadowBox: {
    marginTop: -5,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_6xs,
    borderRadius: Border.br_8xs,
    elevation: 6,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    display:"none"
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
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  mesmeristParent: {
    marginLeft: 10,
    flex: 1,
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
  listitem5: {
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
  listitem6: {
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
  view: {
    padding: Padding.p_xl,
  },
  content: {
    flex: 1,
  },
});

export default CONTENT;
