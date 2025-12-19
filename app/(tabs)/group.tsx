import { AppText } from "@ui/AppText";
import React from "react";
import { View } from "react-native";

export default function Group() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText weight="extrabold" size="lg">
        모임
      </AppText>
    </View>
  );
}
