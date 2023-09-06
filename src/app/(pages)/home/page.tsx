import { HomeHeader } from '@/app/(pages)/home/components/header';
import { Sorter } from '@/app/(pages)/home/components/sorter';
import { ThreadList } from '@/app/(pages)/home/components/thread-list';
import { css } from '@/styled-system/css';

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const mode = searchParams.sort as 'new' | 'hot';

  return (
    <div className={css({ w: 'full' })}>
      <HomeHeader />
      <Sorter mode={mode} />
      <ThreadList type={mode} />
    </div>
  );
}
