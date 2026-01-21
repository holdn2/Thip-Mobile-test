import { Image, StyleSheet } from "react-native";

import { colors } from "@theme/token";

interface ProfileImageProps {
  image: string;
}

export default function ProfileImage({ image }: ProfileImageProps) {
  return <Image source={{ uri: image }} style={styles.profileImage} />;
}

const styles = StyleSheet.create({
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: colors.grey[300],
  },
});
