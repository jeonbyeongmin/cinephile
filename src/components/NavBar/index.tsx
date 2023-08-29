import { LoginModalButton } from '@/components/NavBar/LoginModalButton';
import MovieSelectModalButton from '@/components/NavBar/MovieSelectModalButton';
import { Button, Flex, Logo } from '@/components/base';
import Link from 'next/link';
import NavBarMenu from './NavBarMenu';
import { UserDropdown } from './UserDropdown';

export function NavBar() {
  const isLoggedIn = true;

  return (
    <Flex direction="col" className="w-56 h-[100vh] py-5 fixed top-0 hidden md:flex overflow-hidden mr-3" gap={2}>
      <Link href="/" className="px-3 pb-5">
        <Logo width={100} height={30} />
      </Link>

      <NavBarMenu />

      {isLoggedIn ? (
        <Flex align="stretch" gap={2} className="w-full">
          <UserDropdown
            trigger={
              <Button variant="solid" radius="full" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                {/* <Avatar /> */}
              </Button>
            }
          />
          <MovieSelectModalButton />
        </Flex>
      ) : (
        <LoginModalButton />
      )}
    </Flex>
  );
}
