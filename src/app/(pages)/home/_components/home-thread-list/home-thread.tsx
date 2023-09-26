import * as Thread from '@/components/thread';

import { Poster } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import type { Thread as ThreadType } from '@/types/threads';
import { getRelativeTime } from '@/utils';

import { HomeThreadButtons } from './home-thread-buttons';

interface Props {
  thread: ThreadType;
}

export function HomeThread({ thread }: Props) {
  return (
    <Thread.Root>
      <Thread.Header>
        <Poster
          width="30px"
          size="30px"
          src={thread.channel.movie.posterPath}
          alt={thread.channel.movie.originalTitle}
        />
        <Flex px={2} direction="column" flex={1}>
          <p className={css({ fontSize: { base: 'sm', md: 'md' }, fontWeight: 'bold', lineClamp: 1 })}>
            {thread.channel.movie.krTitle}
          </p>
          <Flex align="center" gap={1} className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>
            <span>{thread.author.name}</span>
            <span>&#183;</span>
            <span>{getRelativeTime(thread.createdAt)}</span>
          </Flex>
        </Flex>
      </Thread.Header>
      <Thread.Body title={thread.title}>
        <Thread.ExpandableContent content={thread.content} />
      </Thread.Body>
      <Thread.Footer>
        <HomeThreadButtons />
      </Thread.Footer>
    </Thread.Root>
  );
}
