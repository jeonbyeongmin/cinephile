'use client';

import { AccountMenu } from '@/app/(pages)/_components/sidebar/account-menu';
import { useUser } from '@/app/_contexts';
import { Button } from '@/components/primitive';
import { open } from '@/redux/features/modal-slice';
import { useAppDispatch } from '@/redux/hooks';
import { Flex } from '@/styled-system/jsx';

export function BottomTools() {
  const { user, isLoggedIn } = useUser();
  const dispatch = useAppDispatch();

  return (
    <>
      {isLoggedIn ? (
        <Flex w="full" gap={2}>
          <AccountMenu user={user} />
          <Button
            variant="solid"
            size="lg"
            w="full"
            rounded="full"
            onClick={() => dispatch(open({ type: 'movieSelect' }))}
          >
            스레드 작성
          </Button>
        </Flex>
      ) : (
        <Button w="full" variant="solid" rounded="full" size="lg" onClick={() => dispatch(open({ type: 'login' }))}>
          로그인
        </Button>
      )}
    </>
  );
}
