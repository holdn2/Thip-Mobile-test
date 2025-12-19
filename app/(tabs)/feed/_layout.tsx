import { FeedHeader } from "@app/(tabs)/feed/_components";
import { colors } from "@theme/token";
import { Stack } from "expo-router";

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
          headerShown: true,
          header: () => <FeedHeader />,
        }}
      />
    </Stack>
  );
}
