'use client';

import { Button } from '@/components/base';
import { open } from '@/redux/features/modalSlice';
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
          {/* <AccountMenu /> */}
          <Button
            variant="solid"
            flex={1}
            rounded="full"
            p={3}
            onClick={() => dispatch(open({ type: 'movieSelect' }))}
            fontWeight="bold"
          >
            글 쓰기
          </Button>
        </Flex>
      ) : (
        <Button variant="solid" rounded="full" p={3} onClick={() => dispatch(open({ type: 'login' }))}>
          로그인
        </Button>
      )}
    </>
  );
}
