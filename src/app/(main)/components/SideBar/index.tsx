'use client';

import { Avatar, Flex, Icon, Logo, Text } from '@/components/base';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SideBar() {
  const pathname = usePathname();

  return (
    <Flex direction="col" className="w-56 h-[calc(100vh)] py-5 sticky top-0 hidden md:flex overflow-hidden" gap={2}>
      <Link href="/" className="px-3 pb-5">
        <Logo width={100} height={30} />
      </Link>

      <Flex as="nav" direction="col" className="overflow-auto flex-1 w-full" gap={2}>
        <Flex
          className={classNames(
            'w-full px-3 py-3 rounded-lg transition-all hover:bg-gray-800',
            pathname === '/home' ? 'pl-5' : 'pl-3'
          )}
          align="center"
          gap={3}
        >
          <Icon name={pathname === '/home' ? 'homeFill' : 'home'} />
          <Text size="lg" weight="bold">
            홈
          </Text>
        </Flex>
        <Flex
          className="w-full px-3 py-3 rounded-lg hover:bg-gray-800 transition-all hover:pl-5"
          align="center"
          gap={3}
        >
          <Icon name="search" />
          <Text size="lg" weight="regular">
            검색
          </Text>
        </Flex>
        <Flex
          className="w-full px-3 py-3 rounded-lg hover:bg-gray-800 transition-all hover:pl-5"
          align="center"
          gap={3}
        >
          <Icon name="movie" />
          <Text size="lg" weight="regular">
            영화
          </Text>
        </Flex>
        <Flex
          className="w-full px-3 py-3 rounded-lg hover:bg-gray-800 transition-all hover:pl-5"
          align="center"
          gap={3}
        >
          <Icon name="people" />
          <Text size="lg" weight="regular">
            인물
          </Text>
        </Flex>
      </Flex>
      <Flex as="button" align="center" gap={3} className="p-3 rounded-full w-full bg-gray-800 hover:bg-gray-700">
        <Avatar />
        <Text size="md" weight="bold" lineClamp={1} className="flex-1">
          전병민전병민전병민전병민
        </Text>
      </Flex>
    </Flex>
  );
}
