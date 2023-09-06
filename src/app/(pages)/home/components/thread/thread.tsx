import { ThreadButtons } from '@/app/(pages)/home/components/thread/thread-buttons';
import { ThreadContent } from '@/app/(pages)/home/components/thread/thread-content';
import { ThreadHead } from '@/app/(pages)/home/components/thread/thread-head';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import type { Thread } from '@/types/threads';

interface ThreadProps {
  thread: Thread;
}

export function Thread({ thread }: ThreadProps) {
  return (
    <Flex direction="column" bg="gray.950" px={3} py={4}>
      <ThreadHead thread={thread} />
      <div className={css({ position: 'relative' })}>
        <ThreadContent content={thread.content} title={thread.title} />
      </div>
      <ThreadButtons />
    </Flex>
  );
}
