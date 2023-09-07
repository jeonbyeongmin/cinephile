import { HomeHeader } from '@/app/(pages)/home/components/header';
import { HomeThreadList } from '@/app/(pages)/home/components/home-thread-list';
import { Sorter } from '@/app/(pages)/home/components/sorter';
import { css } from '@/styled-system/css';

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const mode = searchParams.sort as 'new' | 'hot';

  return (
    <div className={css({ w: 'full' })}>
      <HomeHeader />
      <Sorter mode={mode} />
      <HomeThreadList type={mode} />
    </div>
  );
}
