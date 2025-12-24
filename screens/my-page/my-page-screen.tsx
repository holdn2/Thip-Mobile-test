import { View } from "react-native";

import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

export default function MyPageScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText weight="bold" color={colors.character.orange} size="xl">
        내 정보
      </AppText>
    </View>
  );
}
