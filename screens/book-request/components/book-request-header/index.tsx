import { router } from "expo-router";

import { IcArrowLeft } from "@images/icons";
import { AppText, CustomHeader } from "@shared/ui";
import { colors } from "@theme/token";

export default function BookRequestHeader() {
  const handleGoBack = () => {
    router.back();
  };
  return (
    <CustomHeader
      left={<IcArrowLeft onPress={handleGoBack} />}
      center={
        <AppText weight="bold" size="2xl" color={colors.white}>
          책 신청
        </AppText>
      }
    />
  );
}
