import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { IcSearch } from "@/assets/images/icons";
import { colors, typography } from "@theme/token";

interface SearchBarProps {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  handleSearch: () => void;
}

export default function SearchBar({
  value,
  placeholder,
  setValue,
  handleSearch,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={colors.grey[300]}
        selectionColor={colors.neongreen}
        cursorColor={colors.neongreen}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      <Pressable onPress={handleSearch}>
        <IcSearch />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.darkgrey.main,
  },
  input: {
    flex: 1,
    color: colors.white,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
  },
});
