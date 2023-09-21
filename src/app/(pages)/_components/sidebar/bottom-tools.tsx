'use client';

import { AccountMenu } from '@/app/(pages)/_components/sidebar/account-menu';
import { Button } from '@/components';
import { open } from '@/redux/features/modal-slice';
import { useAppDispatch } from '@/redux/hooks';
import { Flex } from '@/styled-system/jsx';

import { useState } from 'react';

export default function BottomTools() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Flex>
      {isLoggedIn ? (
        <Flex w="full" align="stretch" gap={2}>
          <AccountMenu />
          <Button
            variant="solid"
            flex={1}
            rounded="full"
            p="2!"
            onClick={() => dispatch(open({ type: 'movieSelect' }))}
          >
            글 쓰기
          </Button>
        </Flex>
      ) : (
        <Button
          flex={1}
          variant="solid"
          rounded="full"
          p={3}
          size="lg"
          onClick={() => dispatch(open({ type: 'login' }))}
        >
          로그인
        </Button>
      )}
    </Flex>
  );
}
