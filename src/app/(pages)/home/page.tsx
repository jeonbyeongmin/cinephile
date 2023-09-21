import { HomeThreadList } from '@/app/(pages)/home/_components/home-thread-list';
import { Sorter } from '@/app/(pages)/home/_components/sorter';

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const mode = searchParams.sort as 'new' | 'hot';

  return (
    <>
      <Sorter mode={mode} />
      <HomeThreadList type={mode} />
    </>
  );
}
