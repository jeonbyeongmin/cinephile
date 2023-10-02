import * as Dropdown from '@/components/dropdown';

import type { User } from '@/types/user';

import { logout } from '@/api/oauth/logout';
import { Avatar } from '@/components';
import { iconButtonRecipe } from '@/components/icon-button/recipe';
import { css, cx } from '@/styled-system/css';
import { useState } from 'react';

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
  w: 24,
  bottom: 14,
  rounded: 'md',
  py: 2,
  mt: 1,
});

const itemStyles = css({
  display: 'flex',
  py: 2,
  px: 4,
  cursor: 'pointer',
  userSelect: 'none',

  bg: {
    _hover: 'gray.700',
    _focus: { base: 'gray.700', _hover: 'gray.600' },
  },
});

interface AccountMenuProps {
  user: User | null;
}

export function AccountMenu({ user }: AccountMenuProps) {
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    const { error } = await logout();
    if (error === null) {
      window.location.reload();
    }
  };

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen} className={css({ position: 'relative' })}>
      <Dropdown.Trigger className={triggerStyles}>
        <Avatar src={user?.image ?? ''} alt={user?.name ?? ''} />
      </Dropdown.Trigger>
      <Dropdown.Content className={contentStyles}>
        <Dropdown.Item classNames={itemStyles} onSelect={handleLogout}>
          로그아웃
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
