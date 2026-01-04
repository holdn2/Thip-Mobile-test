import { ComponentType } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { IcRightRight } from "@images/icons";
import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

interface SettingsListItemProps {
  label: string;
  Icon: ComponentType<{ width?: number; height?: number }>;
}

export default function SettingsListItem({
  label,
  Icon,
}: SettingsListItemProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.content}>
        <Icon />
        <AppText weight="semibold" size="base" color={colors.white}>
          {label}
        </AppText>
      </View>
      <IcRightRight />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.darkgrey.dark,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
