'use client';

import * as Dropdown from '@/components/primitive/dropdown';

import type { User } from '@/types/user';

import { logout } from '@/api/oauth/logout';
import { Avatar } from '@/components/primitive';
import { iconButtonRecipe } from '@/components/primitive/icon-button/recipe';
import { css, cx } from '@/styled-system/css';
import { logOnBrowser } from '@/utils/logger';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface AccountMenuProps {
  user: User | null;
}

export function AccountMenu({ user }: AccountMenuProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogoutClick = async () => {
    try {
      const { error } = await logout();
      if (error === null) {
        window.location.reload();
      }
    } catch (error) {
      logOnBrowser('error', error);
    }
  };

  const routeToProfile = () => {
    router.push(`/profile/${user?.id}`);
  };

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen} className={css({ position: 'relative' })}>
      <Dropdown.Trigger className={triggerStyles}>
        <Avatar src={user?.image ?? ''} alt={user?.name ?? ''} />
      </Dropdown.Trigger>
      <Dropdown.Content className={contentStyles}>
        <div className={css({ display: 'flex', alignItems: 'center', gap: 2, py: 3, px: 4 })}>
          <Avatar src={user?.image ?? ''} alt={user?.name ?? ''} />
          <div className={css({ lineClamp: 1 })}>{user?.name}</div>
        </div>
        <Dropdown.Item classNames={itemStyles} onSelect={routeToProfile}>
          프로필
        </Dropdown.Item>
        <Dropdown.Item classNames={itemStyles} onSelect={handleLogoutClick}>
          로그아웃
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

const triggerStyles = cx(
  iconButtonRecipe({
    size: 'sm',
    variant: 'solid',
  }),
  css({ rounded: 'full' })
);

const contentStyles = css({
  position: 'absolute',
  bg: 'gray.800',
  fontSize: 'sm',
  w: 36,
  bottom: 14,
  rounded: 'md',
  py: 2,
  mt: 1,
});

const itemStyles = css({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  py: 2,
  px: 4,
  cursor: 'pointer',

  bg: {
    _hover: 'gray.700',
    _focus: { base: 'gray.700', _hover: 'gray.600' },
  },
});
