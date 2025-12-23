import { Image, StyleSheet, View } from "react-native";

import { ThipSplash } from "@images/thip";
import {
  GoogleLoginButton,
  KakaoLoginButton,
} from "./_components/login-button";

export default function Login() {
  return (
    <View style={styles.pageContainer}>
      <Image source={ThipSplash} />
      <View style={styles.loginButtonWrapper}>
        <KakaoLoginButton />
        <GoogleLoginButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    position: "relative",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 140,
    width: "100%",
    paddingTop: 100,
  },
  loginButtonWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
});
