import { router } from "expo-router";

import { IcArrowLeft } from "@images/icons";
import { AppText, CustomHeader } from "@shared/ui";
import { colors } from "@theme/token";

export default function AlarmHeader() {
  const handleGoBack = () => {
    router.back();
  };
  return (
    <CustomHeader
      left={<IcArrowLeft onPress={handleGoBack} />}
      center={
        <AppText weight="bold" size="2xl" color={colors.white}>
          알림
        </AppText>
      }
    />
  );
}
