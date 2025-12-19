import { colors } from "@theme/token";
import { AppText } from "@ui/AppText";
import { View } from "react-native";

export default function search() {
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
