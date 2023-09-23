'use client';

import { Button, Icon, type IconName } from '@/components';
import { Flex } from '@/styled-system/jsx';

const CALLBACK_URL = window.location.href;

type Provider = {
  id: string;
  label: string;
  iconName: IconName;
  onClick?: () => void;
};

const providers: Provider[] = [
  { id: 'google', label: '구글', iconName: 'google' },
  {
    id: 'kakao',
    label: '카카오',
    iconName: 'kakao',
    onClick: () => {
      window.Kakao.Auth.authorize({
        redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
        isPopup: true,
        state: CALLBACK_URL,
      });
    },
  },
];

export function Providers() {
  return (
    <Flex direction="column" gap={3} w="full" px={5}>
      {providers.map(provider => (
        <Button
          key={provider.id}
          variant="solid"
          rounded="lg"
          flex={1}
          size="lg"
          leftElement={<Icon name={provider.iconName} size={18} />}
          justifyContent="center"
          onClick={provider.onClick}
        >
          {provider.label}로 시작하기
        </Button>
      ))}
    </Flex>
  );
}
