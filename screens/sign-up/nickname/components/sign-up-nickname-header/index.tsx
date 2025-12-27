import { SignUpHeader } from "@screens/sign-up/components";
import { AppText } from "@shared/ui";
import { colors } from "@theme/token";

interface SignUpNicknameHeaderProps {
  disabled: boolean;
  handleClickButton: () => void;
}

export default function SignUpNicknameHeader({
  disabled,
  handleClickButton,
}: SignUpNicknameHeaderProps) {
  return (
    <SignUpHeader
      center={
        <AppText weight="bold" size="2xl" color={colors.white}>
          설정 1/2
        </AppText>
      }
      disabled={disabled}
      handleClickButton={handleClickButton}
    />
  );
}
