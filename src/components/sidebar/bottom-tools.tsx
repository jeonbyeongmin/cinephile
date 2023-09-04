'use client';

import { Button } from '@/components';
import { AccountMenu } from '@/components/sidebar/account-menu';
import { useAppDispatch } from '@/redux/hooks';
import { Flex } from '@/styled-system/jsx';

import { useState } from 'react';

export default function BottomTools() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      {isLoggedIn ? (
        <Flex w="full" align="stretch" gap={2}>
          <AccountMenu />
          <Button variant="solid" flex={1} rounded="full" p={3} fontWeight="bold" href="/movie-select">
            글 쓰기
          </Button>
        </Flex>
      ) : (
        <Button href="/login" variant="solid" rounded="full" p={3} size="lg" justifyContent="center">
          로그인
        </Button>
      )}
    </>
  );
}
