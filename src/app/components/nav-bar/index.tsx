import LoginModalButton from '@/app/components/nav-bar/login-modal-button';
import WriteButton from '@/app/components/nav-bar/write-button';
import { Avatar, Button, Logo } from '@/components/base';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import Link from 'next/link';
import { AccountMenu } from './account-menu';
import NavBarMenu from './nav-bar-menu';

export default function NavBar() {
  const isLoggedIn = true;

  return (
    <nav
      className={css({
        h: '100vh',
        position: 'fixed',
        flexDirection: 'column',
        width: 56,
        py: 5,
        gap: 2,
        display: { base: 'none', md: 'flex' },
      })}
    >
      <Link href="/" className={css({ px: 3, pb: 5 })}>
        <Logo width={120} height={40} />
      </Link>
      <NavBarMenu />
      {isLoggedIn ? (
        <Flex w="full" align="stretch" gap={2}>
          <AccountMenu
            trigger={
              <Button variant="solid" rounded="full" p={2}>
                <Avatar />
              </Button>
            }
          />
          <WriteButton />
        </Flex>
      ) : (
        <LoginModalButton />
      )}
    </nav>
  );
}
