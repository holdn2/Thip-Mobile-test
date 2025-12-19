import { colors } from "@/src/theme/token";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText } from "./AppText";

// 주입용 커스텀 탭바
export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.TabBarContainer}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const { options } = descriptors[route.key];

        return (
          <Pressable
            key={route.key}
            onPress={() => {
              // 탭 라우팅은 React Navigation 방식으로 이동
              navigation.navigate(route.name);
            }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: 12,
              borderRadius: 12,
            }}
          >
            <AppText style={{ color: "white", textAlign: "center" }}>
              아이콘
            </AppText>
            <AppText
              weight={focused ? "bold" : "regular"}
              color={colors.white}
              style={{ textAlign: "center" }}
            >
              {options.title ?? route.name}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderTopColor: "#888888",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#121212",
  },
});
