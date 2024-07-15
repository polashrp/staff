import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const StaffSplash = () => {
  return (
    <View style={styles.staffSplash}>
      <Image
        style={styles.logobigIcon}
        contentFit="cover"
        source={require("../assets/logo3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logobigIcon: {
    width: 145,
    height: 173,
  },
  staffSplash: {
    backgroundColor: Color.staffColor,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 115,
    paddingVertical: 319,
  },
});

export default StaffSplash;
