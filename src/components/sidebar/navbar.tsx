import { type IconName } from '@/components';
import NavLink from '@/components/sidebar/nav-link';
import { css } from '@/styled-system/css';
import { ParsedUrlQueryInput } from 'querystring';

export type NavLink = {
  name: string;
  pathname: string;
  query?: string | ParsedUrlQueryInput | null | undefined;
  iconName: IconName;
};

const navLinks: NavLink[] = [
  { name: '홈', pathname: '/home', query: { sort: 'hot' }, iconName: 'home' },
  { name: '검색', pathname: '/search', iconName: 'search' },
  { name: '영화', pathname: '/channel', iconName: 'movie' },
  { name: '인물', pathname: '/people', iconName: 'people' },
];

export default function Navbar() {
  return (
    <nav className={css({ w: 'full', flex: 1 })}>
      <ul className={css({ w: 'full', display: 'flex', flexDirection: 'column', gap: 2 })}>
        {navLinks.map(({ name, pathname, iconName, query }) => (
          <NavLink key={name} name={name} pathname={pathname} query={query} iconName={iconName} />
        ))}
      </ul>
    </nav>
  );
}
