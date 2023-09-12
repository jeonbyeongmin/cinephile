'use client';

import { Icon, Link, type IconName } from '@/components';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ParsedUrlQueryInput } from 'querystring';

interface Props {
  name: string;
  pathname: string;
  iconName: IconName;
  fillIconName: IconName;
  query?: string | ParsedUrlQueryInput | null | undefined;
}

export default function NavLink({ name, pathname, fillIconName, iconName, query }: Props) {
  const segment = useSelectedLayoutSegment() as string;

  return (
    <li className={flex({ align: 'center', justify: 'center' })}>
      <Link
        href={{ pathname, query }}
        className={flex({ direction: 'column', align: 'center', justify: 'center', gap: 1, color: 'gray.50' })}
      >
        <Icon name={pathname.includes(segment) ? fillIconName : iconName} size={22} />
        <span className={css({ fontSize: 'xs' })}>{name}</span>
      </Link>
    </li>
  );
}
