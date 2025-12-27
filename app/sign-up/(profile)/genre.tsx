import { StyleSheet, View } from "react-native";

import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

export default function SignUpGenre() {
  return (
    <View style={styles.pageContainer}>
      <AppText color={colors.white}>장르</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
});
