import { type IconName } from '@/components';
import { FooterNavLink } from '@/components/footer/footer-nav-link';
import { FooterProfileLink } from '@/components/footer/footer-profile-link';

import { css, cx } from '@/styled-system/css';
import { flex, grid } from '@/styled-system/patterns';
import { ParsedUrlQueryInput } from 'querystring';

export type NavLink = {
  name: string;
  pathname: string;
  query?: string | ParsedUrlQueryInput | null | undefined;
  iconName: IconName;
  fillIconName: IconName;
};

const navLinks: NavLink[] = [
  { name: '홈', pathname: '/home', query: { sort: 'hot' }, iconName: 'home', fillIconName: 'homeFill' },
  { name: '검색', pathname: '/search', iconName: 'search', fillIconName: 'searchFill' },
  { name: '영화', pathname: '/channel', iconName: 'movie', fillIconName: 'movieFill' },
  { name: '인물', pathname: '/people', iconName: 'people', fillIconName: 'peopleFill' },
];

export function FooterNavbar() {
  return (
    <nav className={css({ w: 'full', h: 'full', flex: 1 })}>
      <ul className={cx(grid({ columns: 5 }), css({ w: 'full', h: 'full' }))}>
        {navLinks.map(({ name, pathname, iconName, fillIconName, query }) => (
          <li key={name} className={flex({ align: 'center', justify: 'center' })}>
            <FooterNavLink
              name={name}
              pathname={pathname}
              query={query}
              iconName={iconName}
              fillIconName={fillIconName}
            />
          </li>
        ))}
        <li className={flex({ align: 'center', justify: 'center' })}>
          <FooterProfileLink />
        </li>
      </ul>
    </nav>
  );
}
