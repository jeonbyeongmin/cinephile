import type { IconName } from '@/components/primitive';
import type { UrlObject } from 'url';

import { FooterNavLink } from './footer-nav-link';
import { FooterProfileLink } from './footer-profile-link';

import { css, cx } from '@/styled-system/css';
import { flex, grid } from '@/styled-system/patterns';

interface NavLink {
  name: string;
  url: UrlObject | string;
  iconName: IconName;
  fillIconName: IconName;
}

const navLinks: NavLink[] = [
  { name: '홈', url: { pathname: '/home', query: { sort: 'hot' } }, iconName: 'home', fillIconName: 'homeFill' },
  { name: '검색', url: '/search', iconName: 'search', fillIconName: 'searchFill' },
  { name: '영화', url: '/channel', iconName: 'movie', fillIconName: 'movieFill' },
  { name: '인물', url: '/people', iconName: 'people', fillIconName: 'peopleFill' },
];

const navStyles = css({
  w: 'full',
  h: 'full',
  flex: 1,
});

const listWrapperStyles = cx(
  grid({
    columns: 5,
  }),
  css({
    w: 'full',
    h: 'full',
  })
);

const listStyles = flex({
  align: 'center',
  justify: 'center',
});

export function FooterNavbar() {
  return (
    <nav className={navStyles}>
      <ul className={listWrapperStyles}>
        {navLinks.map(({ name, url, iconName, fillIconName }) => (
          <li key={name} className={listStyles}>
            <FooterNavLink name={name} url={url} iconName={iconName} fillIconName={fillIconName} />
          </li>
        ))}
        <li className={listStyles}>
          <FooterProfileLink />
        </li>
      </ul>
    </nav>
  );
}
