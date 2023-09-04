import NavLink from '@/app/(pages)/components/navbar/nav-link';
import { type IconName } from '@/components';
import { css } from '@/styled-system/css';

type Link = {
  name: string;
  slug: string;
  iconName: IconName;
};

const links: Link[] = [
  { name: '홈', slug: 'home', iconName: 'home' },
  { name: '검색', slug: 'search', iconName: 'search' },
  { name: '영화', slug: 'channel', iconName: 'movie' },
  { name: '인물', slug: 'people', iconName: 'people' },
];

export default function Nav() {
  return (
    <nav className={css({ w: 'full', h: 'full' })}>
      <ul className={css({ w: 'full', display: 'flex', flexDirection: 'column', gap: 2 })}>
        {links.map(({ name, slug, iconName }) => (
          <NavLink key={name} name={name} slug={slug} iconName={iconName} />
        ))}
      </ul>
    </nav>
  );
}
