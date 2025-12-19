import { AppText } from "@/src/shared/ui/AppText";
import { colors } from "@/src/theme/token";
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
        Settings
      </AppText>
    </View>
  );
}
