import type { IconName } from '@/components/primitive';
import type { UrlObject } from 'url';

import NavLink from '@/app/(pages)/_components/sidebar/nav-link';
import { css } from '@/styled-system/css';

type NavLink = {
  name: string;
  url: UrlObject | string;
  iconName: IconName;
  fillIconName: IconName;
};

const navLinks: NavLink[] = [
  { name: '홈', url: { pathname: '/home', query: { sort: 'hot' } }, iconName: 'home', fillIconName: 'homeFill' },
  { name: '검색', url: '/search', iconName: 'search', fillIconName: 'searchFill' },
  { name: '영화', url: '/channel', iconName: 'movie', fillIconName: 'movieFill' },
  { name: '인물', url: '/people', iconName: 'people', fillIconName: 'peopleFill' },
];

export function Navbar() {
  return (
    <nav className={css({ flex: 1, w: 'full' })}>
      <ul>
        {navLinks.map(({ name, url, iconName, fillIconName }) => (
          <NavLink key={name} name={name} url={url} iconName={iconName} fillIconName={fillIconName} />
        ))}
      </ul>
    </nav>
  );
}
