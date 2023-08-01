'use client';

import { Flex, Icon } from '@/components/base';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <Flex className="w-full px-5" justify="center">
      <Flex className="max-w-screen-xl" gap={5}>
        <Flex
          direction="col"
          className="w-52 h-[calc(100vh-80px)] sticky top-16 hidden md:flex mt-16 overflow-auto"
          gap={2}
        >
          <Flex
            className={classNames(
              'w-full px-3 py-3 rounded-lg',
              pathname === '/home' ? 'bg-gray-800 hover:bg-gray-700' : 'hover:bg-gray-800'
            )}
            align="center"
            gap={3}
          >
            <Icon name={pathname === '/home' ? 'homeFill' : 'home'} className="text-lg" />
            <span className="text-lg font-bold">홈</span>
          </Flex>
          <Flex className="w-full px-3 py-3 rounded-lg hover:bg-gray-800" align="center" gap={3}>
            <Icon name="search" className="text-lg" />
            <span className="text-lg font-bold">검색</span>
          </Flex>
          <Flex className="w-full px-3 py-3 rounded-lg hover:bg-gray-800" align="center" gap={3}>
            <Icon name="movie" className="text-lg" />
            <span className="text-lg font-bold">영화</span>
          </Flex>
          <Flex className="w-full px-3 py-3 rounded-lg hover:bg-gray-800" align="center" gap={3}>
            <Icon name="people" className="text-lg" />
            <span className="text-lg font-bold text-">인물</span>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
}
