import { StyleSheet, View } from "react-native";

import { SelectChip } from "@shared/ui";

import { AlarmType } from "../../types";

interface TopFilterBarProps {
  alarmType: AlarmType | null;
  handleSelectType: (type: AlarmType) => void;
}

export default function TopFilterBar({
  alarmType,
  handleSelectType,
}: TopFilterBarProps) {
  return (
    <View style={styles.container}>
      <SelectChip
        label="피드"
        isSelected={alarmType === "feed"}
        handleSelect={() => handleSelectType("feed")}
      />
      <SelectChip
        label="모임"
        isSelected={alarmType === "room"}
        handleSelect={() => handleSelectType("room")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 12,
  },
});
