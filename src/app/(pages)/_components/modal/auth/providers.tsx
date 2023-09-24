'use client';

import { buttonRecipe } from '@/app/(pages)/_components/modal/auth/button.recipe';
import { GoogleIcon, KakaoIcon } from '@/app/(pages)/_components/modal/auth/icons';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

type Provider = {
  id: 'google' | 'kakao';
  label: string;
  icon: React.ReactNode;
  click?: () => void;
};

const providers: Provider[] = [
  {
    id: 'google',
    label: '구글',
    icon: <GoogleIcon />,
    click: () => {
      window.open('https://accounts.google.com/o/oauth2/v2/auth');
    },
  },
  {
    id: 'kakao',
    label: '카카오',
    icon: <KakaoIcon />,
    click: () => {
      window.Kakao.Auth.authorize({
        redirectUri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}?platform=kakao`,
        isPopup: true,
        state: window.location.href,
      });
    },
  },
];

export function Providers() {
  return (
    <Flex direction="column" gap={3} w="full">
      {providers.map(provider => (
        <button key={provider.id} className={buttonRecipe({ provider: provider.id })} onClick={provider.click}>
          {provider.icon}
          <span className={css({ flex: 1 })}>{provider.label}로 시작하기</span>
        </button>
      ))}
    </Flex>
  );
}
