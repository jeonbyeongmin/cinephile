'use client';

import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

import { buttonRecipe } from './button.recipe';
import { GoogleIcon, KakaoIcon } from './icons';

type Provider = {
  id: 'google' | 'kakao';
  label: string;
  icon: React.ReactNode;
  click?(): void;
};

const providers: Provider[] = [
  {
    id: 'google',
    label: '구글',
    icon: <GoogleIcon />,
    click: () => {
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&access_type=offline&include_granted_scopes=true&response_type=code&state=${window.location.href}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI}?platform=google&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;
    },
  },
  {
    id: 'kakao',
    label: '카카오',
    icon: <KakaoIcon />,
    click: () => {
      window.Kakao.Auth.authorize({
        redirectUri: `${process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI}?platform=kakao`,
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
