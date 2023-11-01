import { ThreadButtons } from '@/app/(pages)/thread/[id]/_components/reply-thread-list/thread-buttons';
import { Avatar } from '@/components/primitive';
import * as Thread from '@/components/primitive/thread';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { type Thread as ThreadType } from '@/types/threads';
import { getRelativeTime } from '@/utils';

interface Props {
  thread: ThreadType;
}

export function MainThread({ thread }: Props) {
  return (
    <Thread.Root>
      <Thread.Header>
        <Avatar alt="avatar" src={thread.author.image} />
        <Flex direction="row" align="center" flex={1} gap={1} px={2}>
          <p className={css({ fontSize: { base: 'sm', md: 'md' }, fontWeight: 'bold', lineClamp: 1 })}>
            {thread.author.name}
          </p>
          <span className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>&#183;</span>
          <span className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>
            {getRelativeTime(thread.createdAt)}
          </span>
        </Flex>
      </Thread.Header>
      <Thread.Body title={thread.title}>
        <Thread.Content content={thread.content} />
      </Thread.Body>
      <Thread.Footer>
        <ThreadButtons />
      </Thread.Footer>
    </Thread.Root>
  );
}
