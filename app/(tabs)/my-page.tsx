import { colors } from "@theme/token";
import { AppText } from "@ui/AppText";
import React from "react";
import { View } from "react-native";

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText weight="bold" color={colors.character.orange} size="xl">
        내 정보
      </AppText>
    </View>
  );
}
