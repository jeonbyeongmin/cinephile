import NavBarMenuItem from '@/app/(pages)/components/navbar/navbar-menu-item';
import { type IconName } from '@/components';
import { css } from '@/styled-system/css';

const HOME_PATH = '/home';
const SEARCH_PATH = '/search';
const MOVIE_PATH = '/channel';
const PEOPLE_PATH = '/people';

type Link = {
  name: string;
  path: string;
  iconName: IconName;
};

const links: Link[] = [
  { name: '홈', path: HOME_PATH, iconName: 'home' },
  { name: '검색', path: SEARCH_PATH, iconName: 'search' },
  { name: '영화', path: MOVIE_PATH, iconName: 'movie' },
  { name: '인물', path: PEOPLE_PATH, iconName: 'people' },
];

export default function NavBarMenu() {
  return (
    <nav className={css({ w: 'full', h: 'full' })}>
      <ul className={css({ w: 'full', display: 'flex', flexDirection: 'column', gap: 2 })}>
        {links.map(({ name, path, iconName }) => (
          <NavBarMenuItem key={name} name={name} path={path} iconName={iconName} />
        ))}
      </ul>
    </nav>
  );
}
