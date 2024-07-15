import React, { useState, useMemo } from "react";
import { Toggle } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { Border, Padding } from "../GlobalStyles";

export type Property1Default5Type = {
  /** Style props */
  property1DefaultPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default5 = ({
  property1DefaultPosition,
}: Property1Default5Type) => {
  const [property1Defaultchecked, setProperty1Defaultchecked] = useState(true);
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
    };
  }, [property1DefaultPosition]);

  return (
    <Toggle
      style={[styles.property1default, property1DefaultStyle]}
      status="success"
      checked={property1Defaultchecked}
      onChange={() => setProperty1Defaultchecked(!property1Defaultchecked)}
    />
  );
};

const styles = StyleSheet.create({
  property1default: {
    borderRadius: Border.br_41xl,
    width: 60,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: Padding.p_10xs,
  },
});

export default Property1Default5;
