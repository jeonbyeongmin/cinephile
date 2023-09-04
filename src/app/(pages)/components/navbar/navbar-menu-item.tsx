'use client';

import { Icon, type IconName } from '@/components';
import { cva } from '@/styled-system/css';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface NavBarMenuItemProps {
  name: string;
  slug: string;
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

export default function NavbarMenuItem({ name, slug, iconName }: NavBarMenuItemProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <li>
      <Link href={slug} className={menuItemStyles({ active: segment === slug })}>
        <Icon name={iconName} />
        {name}
      </Link>
    </li>
  );
}
