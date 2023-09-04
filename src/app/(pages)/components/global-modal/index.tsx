'use client';

import LoginModal from './login-modal';
import MovieSelectModal from './movie-select-modal';

export function GlobalModal() {
  return (
    <>
      <LoginModal />
      <MovieSelectModal />
    </>
  );
}
