import { colors } from "@theme/token";
import CustomTabBar from "@ui/CustomTabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.black.main },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "피드",
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          title: "모임",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "검색",
        }}
      />
      <Tabs.Screen
        name="my-page"
        options={{
          title: "내 정보",
        }}
      />
    </Tabs>
  );
}
