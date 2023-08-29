'use client';

import { Button } from '@/components/base';
import LoginModal from '@/components/nav-bar/LoginModal';
import { useState } from 'react';

export function LoginModalButton() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button variant="solid" radius="full" className="w-full p-3" onClick={openModal}>
        로그인
      </Button>
      <LoginModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
}
