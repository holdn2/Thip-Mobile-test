import { router, Stack } from "expo-router";
import { useState } from "react";

import { NicknameGenreContext } from "@screens/sign-up/hooks";
import { SignUpNicknameHeader } from "@screens/sign-up/nickname";
import { colors } from "@theme/token";

export default function NicknameGenreLayout() {
  // TODO: 훅으로 통합 => (screens/sign-up/nickname)
  const [nickname, setNickname] = useState("");
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);
  const [genre, setGenre] = useState<string | null>(null);

  const disabledNickname = nickname.trim().length < 2;

  // TODO: 중복 여부는 추후 서버 api와 연동하여 판별. 성공 시 이동
  const handleToSelectGenre = () => {
    setIsNicknameDuplicated(false);
    router.push("/sign-up/genre");
  };

  return (
    <NicknameGenreContext.Provider
      value={{ nickname, isNicknameDuplicated, genre, setNickname, setGenre }}
    >
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.black.main },
        }}
      >
        <Stack.Screen
          name="nickname"
          options={{
            header: () => (
              <SignUpNicknameHeader
                disabled={disabledNickname}
                handleClickButton={handleToSelectGenre}
              />
            ),
          }}
        />
        <Stack.Screen
          name="genre"
          options={{
            headerShown: true,
          }}
        />
      </Stack>
    </NicknameGenreContext.Provider>
  );
}
