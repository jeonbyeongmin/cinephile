'use client';

import { Button, Flex, Icon, Logo } from '@/components/base';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { UserDropdown } from '../UserMenu/UserDropdown';

export default function Header() {
  const loggedIn = true;

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return (
    <Flex
      className={classNames('h-16 w-full fixed px-5 z-10 transition-all', goingUp ? 'top-0' : '-top-16')}
      align="center"
      justify="center"
    >
      <Flex direction="row" align="center" justify="between" className="max-w-screen-xl w-full">
        <Flex direction="row" align="center">
          <Button className="p-2 md:hidden" variant="ghost">
            <Icon name="menu" size={20} />
          </Button>
          <Link href="/" className="px-3">
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
