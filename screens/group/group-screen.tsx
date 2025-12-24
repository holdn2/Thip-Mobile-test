import { View } from "react-native";

import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

export default function GroupScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText weight="extrabold" size="lg" color={colors.character.lavender}>
        모임
      </AppText>
    </View>
  );
}
