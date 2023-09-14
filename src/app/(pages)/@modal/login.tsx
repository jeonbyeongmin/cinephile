'use client';

import { Button, Dialog, DialogContent, Icon, Logo, type IconName } from '@/components';
import { close, selectModal } from '@/redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { center } from '@/styled-system/patterns';

type Provider = {
  id: string;
  icon: IconName;
  href?: string;
};

const providers: Provider[] = [
  { id: 'google', icon: 'google' },
  {
    id: 'kakao',
    icon: 'kakao',
    href: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
  },
];

export default function LoginModal() {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useAppSelector(selectModal);
  const open = type === 'login' && isOpen;

  return (
    <Dialog open={open} onOpenChange={() => dispatch(close())}>
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
              leftElement={<Icon name={provider.icon} size={18} />}
              justifyContent="center"
              href={provider.href}
              target="_blank"
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
