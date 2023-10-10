import { HomeThreadList, SortDropdown } from '@/app/(pages)/home/_components';
import { Header } from '@/components';
import { css } from '@/styled-system/css';

export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const mode = searchParams.sort as 'new' | 'hot';

  return (
    <>
      <Header className={css({ justifyContent: 'space-between', px: 2 })}>
        <Header.Content className={css({ fontSize: 'lg', fontWeight: 'bold' })}>홈</Header.Content>
        <SortDropdown value={mode} />
      </Header>
      <HomeThreadList type={mode} />
    </>
  );
}
