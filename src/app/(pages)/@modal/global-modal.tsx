import LoginModal from '@/app/(pages)/@modal/login';
import MovieSelectModal from '@/app/(pages)/@modal/movie-select';

export function GlobalModal() {
  return (
    <>
      <MovieSelectModal />
      <LoginModal />
    </>
  );
}
