import LoginModalButton from '@/app/components/nav-bar/login-modal-button';
import MovieSelectModalButton from '@/app/components/nav-bar/movie-select-modal-button';
import { Button, Logo } from '@/components/base';
import { css } from '@/styled-system/css';
import { Flex, Stack } from '@/styled-system/jsx';
import Link from 'next/link';
import NavBarMenu from './nav-bar-menu';
import { UserDropdown } from './user-dropdown';

export default function NavBar() {
  const isLoggedIn = true;

  return (
    <Flex
      direction="column"
      position="fixed"
      h="100vh"
      w="56"
      py={5}
      css={{ display: { base: 'none', md: 'flex' } }}
      gap={2}
    >
      <Link href="/" className={css({ px: 3, pb: 5 })}>
        <Logo width={100} height={30} />
      </Link>
      <NavBarMenu />
      {isLoggedIn ? (
        <Stack align="stretch" gap={2} className="w-full">
          <UserDropdown
            trigger={
              <Button variant="solid" rounded="full" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                {/* <Avatar /> */}
              </Button>
            }
          />
          <MovieSelectModalButton />
        </Stack>
      ) : (
        <LoginModalButton />
      )}
    </Flex>
  );
}
