import { Avatar, Button, Flex, Icon, Logo, Text } from '@/components/base';
import Link from 'next/link';

export default function Header() {
  const loggedIn = true;

  return (
    <Flex as='header' className="h-16 w-full fixed px-5 z-10 bg-gray-950 md:hidden" align="center" justify="center">
      <Flex direction="row" align="center" justify="between" className="max-w-screen-xl w-full">
        <Flex direction="row" align="center">
          <Button className="p-1" variant="ghost">
            <Icon name="menu" size={20} />
          </Button>
          <Link href="/" className="px-3">
            <Logo width={100} height={30} />
          </Link>
        </Flex>
        {loggedIn ? (
          <Flex direction="row" align="stretch" gap={2}>
            <Link href="/write" className="flex">
              <Button variant="solid" className="flex-1 px-5" radius="full">
                <Text size="sm" weight="medium">
                  글 쓰기
                </Text>
              </Button>
            </Link>
            <Avatar src="https://avatars.githubusercontent.com/u/48426991?v=4" size="sm" />
          </Flex>
        ) : (
          <Flex direction="row" align="center" gap={1}>
            <Link href="/login">
              <Button variant="solid" className="px-3 py-2">
                로그인
              </Button>
            </Link>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
