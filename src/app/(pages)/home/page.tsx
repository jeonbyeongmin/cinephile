import { css } from '@/styled-system/css';

import { ThreadSortDropdown, type ThreadSortValue } from '@/components/domain';
import { Header } from '@/components/primitive';

import { HomeThreadList } from './_components';

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const mode = searchParams.sort as ThreadSortValue;

  return (
    <>
      <Header className={css({ justifyContent: 'space-between', px: 3 })}>
        <Header.Content className={css({ fontSize: 'lg', fontWeight: 'bold' })}>홈</Header.Content>
        <ThreadSortDropdown value={mode} />
      </Header>
      <HomeThreadList type={mode} />
    </>
  );
}
