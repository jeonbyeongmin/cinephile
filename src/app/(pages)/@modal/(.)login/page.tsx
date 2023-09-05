'use client';

import { Button, Dialog, DialogContent, Icon, Logo, type IconName } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { center } from '@/styled-system/patterns';
import { useRouter } from 'next/navigation';

type Provider = {
  id: string;
  icon: IconName;
};

const providers: Provider[] = [
  { id: 'google', icon: 'google' },
  { id: 'kakao', icon: 'kakao' },
];

export default function LoginModal() {
  const router = useRouter();
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className={center({ maxW: '2xl', p: 10 })}>
        <Logo width={300} height={80} />
        <p className={css({ mt: 2, mb: 5 })}>로그인을 해서 토론을 시작하세요!</p>
        <Flex gap={2} w="full" px={10}>
          {providers.map(provider => (
            <Button
              key={provider.id}
              variant="solid"
              rounded="lg"
              flex={1}
              size="xl"
              leftIcon={<Icon name={provider.icon} size={18} />}
              justifyContent="center"
            >
              {provider.id} 로 시작하기
            </Button>
          ))}
        </Flex>
        <p
          className={css({
            fontSize: 'xs',
            color: 'gray.400',
            mt: 5,
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
          })}
        >
          <span>로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,</span>
          <span>서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.</span>
        </p>
      </DialogContent>
    </Dialog>
  );
}
