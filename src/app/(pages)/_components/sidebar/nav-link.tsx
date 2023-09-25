'use client';

import type { UrlObject } from 'url';

import { Icon, Link, type IconName } from '@/components';
import { cva } from '@/styled-system/css';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  name: string;
  iconName: IconName;
  fillIconName: IconName;
  url: UrlObject | string;
}

export default function NavLink({ name, url, iconName, fillIconName }: Props) {
  const segment = useSelectedLayoutSegment() as string;
  const pathname = typeof url === 'string' ? url : url.pathname;

  return (
    <li>
      <Link href={url} className={navLinkRecipe({ active: pathname?.includes(segment) })}>
        <Icon name={pathname?.includes(segment) ? fillIconName : iconName} />
        {name}
      </Link>
    </li>
  );
}

const navLinkRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: 3,
    rounded: 'lg',
    width: 'full',
    fontSize: 'lg',
    mb: 2,
  },

  variants: {
    active: {
      true: { bg: { base: 'gray.800', _hover: 'gray.700' } },
      false: { bg: { base: 'transparent', _hover: 'gray.800' } },
    },
  },
});
