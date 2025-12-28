import { View } from "react-native";

import { ButtonHeader, CustomHeader } from "@shared/ui";
import { OnboardingCarouselItem } from "./components";
import { ONBOARDING } from "./constants";

export default function OnboardingScreen() {
  return (
    <View>
      <CustomHeader
        right={<ButtonHeader handleClickButton={() => {}}>다음</ButtonHeader>}
      />

      <OnboardingCarouselItem item={ONBOARDING[0]} />
    </View>
  );
}
