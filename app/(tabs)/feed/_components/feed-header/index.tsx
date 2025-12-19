import { colors } from "@/src/theme/token";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AppText, CustomHeader } from "@shared/ui";

export default function FeedHeader() {
  return (
    <CustomHeader
      left={
        <AppText weight="bold" size="2xl" style={{ color: colors.purple.main }}>
          Thip
        </AppText>
      }
      right={<Ionicons name="search" size={24} color={colors.white} />}
    />
  );
}
