'use client';

import { AccountMenu } from '@/app/components/nav-bar/account-menu';
import LoginModalButton from '@/app/components/nav-bar/login-modal-button';
import WriteButton from '@/app/components/nav-bar/write-button';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

export default function BottomTools() {
  // TODO: Redux로 옮기기
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Flex w="full" align="stretch" gap={2}>
          <AccountMenu />
          <WriteButton />
        </Flex>
      ) : (
        <LoginModalButton />
      )}
    </>
  );
}
