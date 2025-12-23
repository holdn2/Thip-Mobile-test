import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

import { IcKakaotalk } from "@images/icons";
import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

export default function KakaoLoginButton() {
  const handleLogin = () => {
    // TODO: 카카오 소셜 로그인
    router.push("/(tabs)/feed");
  };
  return (
    <Pressable style={styles.loginButtonConatainer} onPress={handleLogin}>
      <IcKakaotalk />
      <AppText weight="semibold" size="base" color={colors.black.main}>
        카카오계정 로그인
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  loginButtonConatainer: {
    backgroundColor: colors.kakaoyellow,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",

    paddingVertical: 10,
    width: "100%",
    borderRadius: 12,
  },
});
