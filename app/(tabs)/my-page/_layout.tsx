import { Stack } from "expo-router";

import { MyPageHeader } from "@screens/my-page";
import { colors } from "@theme/token";

export default function MyPageLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.black.main },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <MyPageHeader />,
        }}
      />
    </Stack>
  );
}
