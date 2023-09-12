'use client';

import { Icon, Link, type IconName } from '@/components';
import { cva } from '@/styled-system/css';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ParsedUrlQueryInput } from 'querystring';

interface Props {
  name: string;
  pathname: string;
  iconName: IconName;
  query?: string | ParsedUrlQueryInput | null | undefined;
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

export default function NavLink({ name, pathname, iconName, query }: Props) {
  const segment = useSelectedLayoutSegment() as string;

  return (
    <li>
      <Link href={{ pathname, query }} className={menuItemStyles({ active: pathname.includes(segment) })}>
        <Icon name={iconName} />
        {name}
      </Link>
    </li>
  );
}
