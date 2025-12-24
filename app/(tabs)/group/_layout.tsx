import { Stack } from "expo-router";

import { GroupHeader } from "@screens/group";
import { colors } from "@theme/token";

export default function GroupLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.black.main },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <GroupHeader />,
        }}
      />
    </Stack>
  );
}
