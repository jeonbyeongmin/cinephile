import LoginModal from '@/app/(pages)/@modal/login';
import MovieSelectModal from '@/app/(pages)/@modal/movie-select';
import { css } from '@/styled-system/css';

export function GlobalModal() {
  return (
    <div className={css({ zIndex: 10 })}>
      <MovieSelectModal />
      <LoginModal />
    </div>
  );
}
