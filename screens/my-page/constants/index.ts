import {
  IcDocument,
  IcGuide,
  IcHeadset,
  IcNoAlarm,
  IcSave,
  IcVersion,
  IcVoice,
} from "@images/icons";

export const SETTINGS_MY_ACTIVITY = {
  label: "저장",
  icon: IcSave,
};

export const SETTINGS_OTHER = [
  {
    label: "알림설정",
    icon: IcNoAlarm,
  },
  {
    label: "고객센터",
    icon: IcHeadset,
  },
  {
    label: "공지사항",
    icon: IcVoice,
  },
  {
    label: "개인정보처리방침 & 이용약관",
    icon: IcDocument,
  },
  {
    label: "가이드",
    icon: IcGuide,
  },
  {
    label: "버전",
    icon: IcVersion,
  },
];
