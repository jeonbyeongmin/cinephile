'use client';

import { Icon, type IconName } from '@/components/base';
import { cva } from '@/styled-system/css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavBarMenuItemProps {
  name: string;
  path: string;
  iconName: IconName;
}

const menuItemStyles = cva({
  base: {
    display: 'flex',
    gap: 4,
    w: 'full',
    alignItems: 'center',
    p: 3,
    rounded: 'md',
  },

  variants: {
    active: {
      true: { bg: { base: 'gray.800', _hover: 'gray.700' } },
      false: { bg: { base: 'transparent', _hover: 'gray.800' } },
    },
  },
});

export default function NavBarMenuItem({ name, path, iconName }: NavBarMenuItemProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link href={path} className={menuItemStyles({ active: pathname === path })}>
        <Icon name={iconName} />
        {name}
      </Link>
    </li>
  );
}
