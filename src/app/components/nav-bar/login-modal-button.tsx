'use client';

import LoginModal from '@/app/components/nav-bar/login-modal';
import { Button } from '@/components/base';
import { useState } from 'react';

export default function LoginModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button variant="solid" rounded="full" p={3} onClick={openModal}>
        로그인
      </Button>
      <LoginModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
}
