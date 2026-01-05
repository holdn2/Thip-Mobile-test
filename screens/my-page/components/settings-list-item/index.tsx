import { Pressable, StyleSheet, View } from "react-native";

import { IcRightRight } from "@images/icons";
import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

import {
  SETTINGS_MY_ACTIVITY,
  SETTINGS_OTHER,
  type SettingsItem,
} from "../../constants";

interface SettingsListItemProps {
  item: SettingsItem;
}

export default function SettingsListItem({ item }: SettingsListItemProps) {
  // TODO: 각 아이템에 대한 action 연결
  const handlePress = () => {
    switch (item.id) {
      case SETTINGS_MY_ACTIVITY.id:
        console.log("저장 페이지로 이동");
        break;
      case SETTINGS_OTHER[0].id:
        console.log("알림설정 페이지로 이동");
        break;
      case SETTINGS_OTHER[1].id:
        console.log("고객센터 페이지로 이동");
        break;
      case SETTINGS_OTHER[2].id:
        console.log("공지사항 페이지로 이동");
        break;
      case SETTINGS_OTHER[3].id:
        console.log("개인정보처리방침 & 이용약관 페이지로 이동");
        break;
      case SETTINGS_OTHER[4].id:
        console.log("가이드 페이지로 이동");
        break;
      case SETTINGS_OTHER[5].id:
        console.log("버전? 페이지로 이동");
        break;
    }
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.content}>
        <item.icon />
        <AppText weight="semibold" size="base" color={colors.white}>
          {item.label}
        </AppText>
      </View>
      <IcRightRight />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.darkgrey.dark,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
