import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type ConnectBankType = {
  onClose?: () => void;
};

const ConnectBank = ({ onClose }: ConnectBankType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.connectbank}>
      <Image
        style={styles.logobigIcon}
        contentFit="cover"
        source={require("../assets/logo1.png")}
      />
      <Text
        style={[styles.bankAccountHas, styles.loginTypo]}
      >{`Bank Account has been
Connected Successfully`}</Text>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "StaffDashboard" })
        }
      >
        <Text style={[styles.login, styles.loginTypo]}>Ok</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
  },
  logobigIcon: {
    width: 95,
    height: 116,
  },
  bankAccountHas: {
    alignSelf: "stretch",
    fontSize: FontSize.size_mid,
    lineHeight: 29,
    color: Color.colorDarkslateblue,
    marginTop: 14,
  },
  login: {
    flex: 1,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    textTransform: "capitalize",
    color: Color.staffColor,
  },
  button: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.color,
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    width: 82,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
    alignItems: "center",
  },
  connectbank: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    width: 337,
    height: 282,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 11,
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
  },
});

export default ConnectBank;
