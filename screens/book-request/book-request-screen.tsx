import { StyleSheet, View } from "react-native";

import { THIP_EMAIL } from "@shared/constants";
import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

export default function BookRequestScreen() {
  return (
    <View style={styles.container}>
      <AppText weight="semibold" size="lg" color={colors.white}>
        {THIP_EMAIL}
      </AppText>
      <AppText
        weight="regular"
        size="sm"
        color={colors.grey[100]}
        style={styles.description}
      >
        {`이메일로 책 제목, 출판사를 보내주시면\n빠른 시일내로 책을 추가해드릴게요!`}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  description: {
    textAlign: "center",
  },
});
