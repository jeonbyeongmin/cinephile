'use client';

import MovieSelectModal from '@/components/MovieSelectModal';
import { Button } from '@/components/base';
import { useState } from 'react';

export default function MovieSelectModalButton() {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button variant="solid" className="flex-1" radius="full" onClick={openModal}>
        글 쓰기
      </Button>
      <MovieSelectModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
