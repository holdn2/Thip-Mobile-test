import { ReactNode } from "react";

import { ButtonHeader, CustomHeader } from "@shared/ui";

interface SignUpHeaderProps {
  center?: ReactNode;
  disabled: boolean;
  handleClickButton: () => void;
}

export default function SignUpHeader({
  center,
  disabled,
  handleClickButton,
}: SignUpHeaderProps) {
  return (
    <CustomHeader
      center={center}
      right={
        <ButtonHeader disabled={disabled} handleClickButton={handleClickButton}>
          다음
        </ButtonHeader>
      }
    />
  );
}
