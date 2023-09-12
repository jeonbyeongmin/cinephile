import { type IconName } from '@/components';
import NavLink from '@/components/sidebar/nav-link';
import { css } from '@/styled-system/css';
import { ParsedUrlQueryInput } from 'querystring';

type NavLink = {
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

export default function Navbar() {
  return (
    <nav className={css({ w: 'full', flex: 1 })}>
      <ul className={css({ w: 'full', display: 'flex', flexDirection: 'column', gap: 2 })}>
        {navLinks.map(({ name, pathname, iconName, fillIconName, query }) => (
          <NavLink key={name} name={name} pathname={pathname} query={query} iconName={iconName} fillIconName={fillIconName} />
        ))}
      </ul>
    </nav>
  );
}
