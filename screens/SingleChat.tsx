import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { Image } from "expo-image";
import View4 from "../components/View4";
import Left from "../components/Left";
import Right from "../components/Right";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SingleChat = () => {
  return (
    <View style={[styles.singleChat, styles.singleChatFlexBox]}>
      <View style={[styles.statusBar, styles.statusBarBg]} />
      <View4 />
      <ScrollView
        style={styles.chat}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chatScrollViewContent}
      >
        <Left />
        <Right />
        <Left />
        <Right />
      </ScrollView>
      <View style={styles.view}>
        <View style={[styles.typeYourMessageWrapper, styles.singleChatFlexBox]}>
          <TextInput
            style={styles.typeYourMessage}
            placeholder="Type your message..."
            placeholderTextColor="#7c7d8a"
          />
        </View>
        <Pressable style={[styles.backbutton, styles.statusBarBg]}>
          <View>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector21.png")}
            />
            <Text style={[styles.t, styles.tFlexBox]}>t</Text>
          </View>
          <Text style={[styles.t1, styles.tFlexBox]}>T</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  singleChatFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  statusBarBg: {
    backgroundColor: Color.staffColor,
    alignItems: "center",
  },
  tFlexBox: {
    display: "none",
    textAlign: "left",
    lineHeight: 22,
    letterSpacing: 0,
  },
  statusBar: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  chat: {
    alignSelf: "stretch",
    flex: 1,
  },
  typeYourMessage: {
    fontFamily: FontFamily.outfitRegular,
    fontSize: FontSize.size_mini,
    flex: 1,
  },
  typeYourMessageWrapper: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
  },
  vectorIcon: {
    width: 22,
    height: 19,
  },
  t: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    marginTop: 10,
  },
  t1: {
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.staffColor,
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
    width: 50,
    height: 50,
    justifyContent: "center",
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  view: {
    padding: Padding.p_xl,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  singleChat: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 926,
  },
});

export default SingleChat;
