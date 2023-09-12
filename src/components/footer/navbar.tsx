import { Avatar, Link, type IconName } from '@/components';
import NavLink from '@/components/footer/nav-link';

import { css, cx } from '@/styled-system/css';
import { flex, grid } from '@/styled-system/patterns';
import { ParsedUrlQueryInput } from 'querystring';

export type NavLink = {
  name: string;
  pathname: string;
  query?: string | ParsedUrlQueryInput | null | undefined;
  iconName: IconName;
  fillIconName?: IconName;
};

const navLinks: NavLink[] = [
  { name: '홈', pathname: '/home', query: { sort: 'hot' }, iconName: 'home', fillIconName: 'homeFill' },
  { name: '검색', pathname: '/search', iconName: 'search', fillIconName: 'searchFill' },
  { name: '영화', pathname: '/channel', iconName: 'movie' },
  { name: '인물', pathname: '/people', iconName: 'people' },
];

export default function Navbar() {
  return (
    <nav className={css({ w: 'full', h: 'full', flex: 1 })}>
      <ul className={cx(grid({ columns: 5 }), css({ w: 'full', h: 'full' }))}>
        {navLinks.map(({ name, pathname, iconName, fillIconName, query }) => (
          <NavLink
            key={name}
            name={name}
            pathname={pathname}
            query={query}
            iconName={iconName}
            fillIconName={fillIconName}
          />
        ))}
        <li className={flex({ align: 'center', justify: 'center' })}>
          <Link
            href={{ pathname: '/profile', query: { id: 1 } }}
            className={flex({ direction: 'column', align: 'center', justify: 'center', gap: 1 })}
          >
            <Avatar size={6} />
            <span className={css({ fontSize: 'xs' })}>프로필</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
