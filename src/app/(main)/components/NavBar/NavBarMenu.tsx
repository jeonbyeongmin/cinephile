'use client';

import { Icon, Text } from '@/components/base';
import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HOME_PATH = '/home';
const SEARCH_PATH = '/search';
const MOVIE_PATH = '/channel';
const PEOPLE_PATH = '/people';

function HomeIcon(active = false) {
  return <Icon name={active ? 'homeFill' : 'home'} />;
}

function SearchIcon(active = false) {
  return <Icon name="search" strokeWidth={active ? 1 : 0} />;
}

function MovieIcon(active = false) {
  return <Icon name="movie" strokeWidth={active ? 1 : 0} />;
}

function PeopleIcon(active = false) {
  return <Icon name="people" strokeWidth={active ? 1 : 0} />;
}

const links = [
  { name: '홈', path: HOME_PATH, icon: HomeIcon },
  { name: '검색', path: SEARCH_PATH, icon: SearchIcon },
  { name: '영화', path: MOVIE_PATH, icon: MovieIcon },
  { name: '인물', path: PEOPLE_PATH, icon: PeopleIcon },
];

export default function NavBarMenu() {
  const pathname = usePathname();

  return (
    <Menu as="nav" className="w-full h-full">
      <Menu.Items className="w-full flex-col flex gap-2" as="ul" static>
        {links.map(({ name, path, icon }) => (
          <Menu.Item as="li" key={path}>
            <Link
              href={path}
              className={classNames(
                pathname === path ? 'bg-gray-800 hover:bg-gray-700' : 'hover:bg-gray-800',
                'group flex gap-4 w-full items-center p-3 rounded-md'
              )}
            >
              {icon(pathname === path)}
              <Text size="lg" weight={pathname === path ? 'bold' : 'regular'}>
                {name}
              </Text>
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
