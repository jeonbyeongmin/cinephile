import { Button, Flex, Icon, Logo } from '@/components/base';
import Link from 'next/link';
import { UserDropdown } from '../UserMenu/UserDropdown';

export default function Header() {
  const loggedIn = true;

  return (
    <Flex className="h-16 w-full fixed px-5 z-10" align="center" justify="center">
      <Flex direction="row" align="center" justify="between" className="max-w-screen-xl w-full">
        <Flex direction="row" align="center" gap={2}>
          <Button className="p-2 md:hidden" variant="ghost">
            <Icon name="menu" size={20} />
          </Button>
          <Link href="/">
            <Logo width={100} height={30} />
          </Link>
        </Flex>
        {loggedIn ? (
          <UserDropdown />
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
