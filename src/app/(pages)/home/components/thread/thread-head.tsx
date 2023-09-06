import { ThreadPoster } from '@/app/(pages)/home/components/thread/thread-poster';
import { Icon, IconButton } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import type { Thread } from '@/types/threads';
import { getRelativeTime } from '@/utils';

interface ThreadHeadProps {
  thread: Thread;
}

export function ThreadHead({ thread }: ThreadHeadProps) {
  return (
    <Flex align="start" mb={3}>
      <ThreadPoster posterPath={thread.channel.movie.posterPath} krTitle={thread.channel.movie.krTitle} />
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

      <IconButton
        icon={<Icon name="moreVertical" size={16} />}
        aria-label="more button"
        variant="ghost"
        size="sm"
        rounded="full"
      />
    </Flex>
  );
}
