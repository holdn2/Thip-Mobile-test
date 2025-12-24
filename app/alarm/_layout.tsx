import { Stack } from "expo-router";

import { AlarmHeader } from "@screens/alarm";
import { colors } from "@theme/token";

export default function AlarmLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.black.main },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <AlarmHeader />,
        }}
      />
    </Stack>
  );
}
