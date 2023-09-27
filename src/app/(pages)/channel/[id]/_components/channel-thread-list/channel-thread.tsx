import * as Thread from '@/components/thread';

import { Avatar } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import type { Thread as ThreadType } from '@/types/threads';
import { getRelativeTime } from '@/utils';

import { ThreadButtons } from './thread-buttons';

interface Props {
  thread: ThreadType;
}

export function ChannelThread({ thread }: Props) {
  return (
    <Thread.Root>
      <Thread.Header>
        <Avatar />
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
        <Thread.ExpandableContent content={thread.content} />
      </Thread.Body>
      <Thread.Footer>
        <ThreadButtons />
      </Thread.Footer>
    </Thread.Root>
  );
}
