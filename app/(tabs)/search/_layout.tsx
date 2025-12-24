import { Stack } from "expo-router";

import { SearchHeader } from "@screens/search";
import { colors } from "@theme/token";

export default function SearchLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.black.main },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <SearchHeader />,
        }}
      />
    </Stack>
  );
}
