'use client';

import MovieSelectModal from '@/components/MovieSelectModal';
import { Button } from '@/components/base';
import { useState } from 'react';

export default function WriteButton() {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button variant="solid" flex={1} rounded="full" onClick={openModal} fontWeight="bold">
        글 쓰기
      </Button>
      <MovieSelectModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}