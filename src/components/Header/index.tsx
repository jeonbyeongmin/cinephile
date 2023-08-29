'use client';

import MovieSelectModal from '@/components/MovieSelectModal';
import { Avatar, Button, Icon, Logo, Text } from '@/components/base';
import { Stack } from '@/styled-system/jsx';
import classNames from 'classnames';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

export default function Header() {
  const loggedIn = true;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // TODO: 스로틀, 최적화
  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar, lastScrollY]);

  return (
    <Stack
      className={classNames(
        'h-16 w-full fixed px-5 z-20 bg-gray-950 md:hidden transition-all duration-300 border-b border-gray-800',
        {
          'translate-y-0': show,
          '-translate-y-16': !show,
        }
      )}
      align="center"
      justify="center"
    >
      <Stack direction="row" align="center" justify="between" className="max-w-screen-xl w-full">
        <Stack direction="row" align="center">
          <Button className="p-1" variant="ghost">
            <Icon name="menu" size={20} />
          </Button>
          <Link href="/" className="px-3">
            <Logo width={100} height={30} />
          </Link>
        </Stack>
        {loggedIn ? (
          <Stack direction="row" align="stretch" gap={2}>
            <Button variant="solid" className="stackStack-1 px-5" radius="full" onClick={openModal}>
              <Text size="sm" weight="medium">
                글 쓰기
              </Text>
            </Button>
            <Avatar src="https://avatars.githubusercontent.com/u/48426991?v=4" size="sm" />
          </Stack>
        ) : (
          <Stack direction="row" align="center" gap={1}>
            <Link href="/login">
              <Button variant="solid" className="px-3 py-2">
                로그인
              </Button>
            </Link>
          </Stack>
        )}
      </Stack>
      <MovieSelectModal isOpen={isModalOpen} closeModal={closeModal} />
    </Stack>
  );
}
