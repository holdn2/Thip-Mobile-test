import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    Pretendard_400: require("../assets/fonts/Pretendard-Regular.otf"),
    Pretendard_500: require("../assets/fonts/Pretendard-Medium.otf"),
    Pretendard_600: require("../assets/fonts/Pretendard-SemiBold.otf"),
    Pretendard_700: require("../assets/fonts/Pretendard-Bold.otf"),
    Pretendard_800: require("../assets/fonts/Pretendard-ExtraBold.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
