import { Stack } from "expo-router";

import { FeedHeader } from "@screens/feed";
import { colors } from "@theme/token";

export default function FeedLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.black.main },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <FeedHeader />,
        }}
      />
    </Stack>
  );
}
