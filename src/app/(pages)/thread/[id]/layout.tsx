import { getThread } from '@/api/threads';
import { Header } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export default async function ThreadDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const threadId = params.id;
  const { thread } = await getThread({ id: Number(threadId), isServer: true });

  return (
    <Flex direction="column" css={{ position: 'relative' }}>
      <Header>
        <Header.Back />
        <Header.Content className={css({ display: 'flex', flexDirection: 'column' })}>
          <p className={css({ fontSize: 'md', fontWeight: 'bold' })}>{thread.channel.movie.krTitle}</p>
          <p className={css({ fontSize: 'xs', color: 'gray.400', fontWeight: 'medium' })}>
            {thread.channel.threadCount}개의 스레드
          </p>
        </Header.Content>
      </Header>
      {children}
    </Flex>
  );
}
