import { HomeThreadList } from '@/app/(pages)/home/_components';
import { SortDropdown } from '@/app/(pages)/home/_components/sort-dropdown';
import { Header } from '@/components';
import { css } from '@/styled-system/css';

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const mode = searchParams.sort as 'new' | 'hot';

  return (
    <>
      <Header className={css({ justifyContent: 'space-between' })}>
        <Header.Content className={css({ fontSize: 'lg', fontWeight: 'bold' })}>홈</Header.Content>
        <SortDropdown value={mode} />
      </Header>
      <HomeThreadList type={mode} />
    </>
  );
}
