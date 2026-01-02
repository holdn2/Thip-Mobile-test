import { Stack } from "expo-router";

import { BookRequestHeader } from "@screens/book-request";
import { colors } from "@theme/token";

export default function BookRequestLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.black.main },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <BookRequestHeader />,
        }}
      />
    </Stack>
  );
}
