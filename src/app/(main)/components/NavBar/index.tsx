import { UserDropdown } from '@/app/(main)/components/NavBar/UserDropdown';
import { Avatar, Button, Flex, Logo } from '@/components/base';
import Link from 'next/link';
import NavBarMenu from './NavBarMenu';

export function NavBar() {
  return (
    <Flex direction="col" className="w-56 h-[calc(100vh)] py-5 sticky top-0 hidden md:flex overflow-hidden" gap={2}>
      <Link href="/" className="px-3 pb-5">
        <Logo width={100} height={30} />
      </Link>

      <NavBarMenu />

      <Flex align="stretch" gap={2} className="w-full">
        <UserDropdown
          trigger={
            <Button variant="solid" radius="full" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <Avatar />
            </Button>
          }
        />
        <Link href="/write" className="flex w-full">
          <Button variant="solid" className="flex-1" radius="full">
            글 쓰기
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
