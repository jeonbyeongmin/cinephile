'use client';

import type { IconName } from '@/components/primitive';
import type { Url } from '@/types/url';

import { navLinkStyles } from './footer.styles';

import { Icon, Link } from '@/components/primitive';
import { css } from '@/styled-system/css';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  name: string;
  url: Url;
  iconName: IconName;
  fillIconName: IconName;
}

export function FooterNavLink({ name, url, fillIconName, iconName }: Props) {
  const segment = useSelectedLayoutSegment() as string;
  const pathname = typeof url === 'string' ? url : url.pathname;
  const isActive = pathname?.includes(segment) ?? false;

  return (
    <Link href={url} className={navLinkStyles}>
      <Icon name={isActive ? fillIconName : iconName} size={22} />
      <span
        className={css({
          fontSize: 'xs',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        {name}
      </span>
    </Link>
  );
}
