import { Thread } from '@/app/(pages)/home/components/thread';
import { useThreadsQuery } from '@/hooks/query';
import { css } from '@/styled-system/css';

// TODO: 페이징 처리

interface ThreadListProps {
  type: 'hot' | 'new';
}

export function ThreadList({ type }: ThreadListProps) {
  const { data } = useThreadsQuery({ type });

  return (
    <ul className={css({ display: 'flex', flexDirection: 'column', gap: 3, bg: 'gray.900', pt: 3 })}>
      {data?.pages.map(group => {
        return (
          <>
            {group.threads.map(thread => {
              return (
                <li key={thread.threadId}>
                  <Thread thread={thread} />
                </li>
              );
            })}
          </>
        );
      })}
    </ul>
  );
}
