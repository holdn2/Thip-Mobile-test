import { View } from "react-native";

import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

export default function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText weight="extrabold" size="lg" color={colors.neongreen}>
        검색
      </AppText>
    </View>
  );
}
