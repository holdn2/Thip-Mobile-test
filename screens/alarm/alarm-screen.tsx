import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { AlarmEmptyView, AlarmList, TopFilterBar } from "./components";
import { DUMMY_ALARMS } from "./constants";
import { AlarmResponse, AlarmType } from "./types";

export default function AlarmScreen() {
  const [alarmData, setAlarmData] = useState<AlarmResponse[] | null>(null);
  const [alarmType, setAlarmType] = useState<AlarmType | null>(null);

  useEffect(() => {
    // TODO: 서버 api로 받아오기
    setAlarmData(DUMMY_ALARMS);
  }, []);

  const handleSelectType = (type: AlarmType) => {
    if (type === alarmType) {
      setAlarmType(null);
      return;
    }
    setAlarmType(type);
  };

  return (
    <View style={styles.page}>
      <TopFilterBar alarmType={alarmType} handleSelectType={handleSelectType} />
      {alarmData && alarmData?.length > 0 ? (
        <AlarmList filter={alarmType} alarmData={alarmData} />
      ) : (
        <AlarmEmptyView />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
