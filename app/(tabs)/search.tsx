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
      <AppText weight="extrabold" size="lg">
        검색
      </AppText>
    </View>
  );
}
