import { ComponentType } from "react";

import {
  IcDocument,
  IcGuide,
  IcHeadset,
  IcNoAlarm,
  IcSave,
  IcVersion,
  IcVoice,
} from "@images/icons";

export interface SettingsItem {
  id: string;
  label: string;
  icon: ComponentType<{ width?: number; height?: number }>;
}

export const SETTINGS_MY_ACTIVITY: SettingsItem = {
  id: "save",
  label: "저장",
  icon: IcSave,
};

export const SETTINGS_OTHER: SettingsItem[] = [
  { id: "alarm", label: "알림설정", icon: IcNoAlarm },
  { id: "support", label: "고객센터", icon: IcHeadset },
  { id: "notice", label: "공지사항", icon: IcVoice },
  { id: "policy", label: "개인정보처리방침 & 이용약관", icon: IcDocument },
  { id: "guide", label: "가이드", icon: IcGuide },
  { id: "version", label: "버전", icon: IcVersion },
];
