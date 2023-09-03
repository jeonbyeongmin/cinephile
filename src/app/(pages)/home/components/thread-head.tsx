import { ThreadPoster } from '@/app/(pages)/home/components/thread-poster';
import { Button, Icon } from '@/components/base';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import type { Thread } from '@/types/threads';

interface ThreadHeadProps {
  thread: Thread;
}

export function ThreadHead({ thread }: ThreadHeadProps) {
  return (
    <Flex align="start" mb={2}>
      <ThreadPoster posterPath={thread.channel.movie.posterPath} krTitle={thread.channel.movie.krTitle} />
      <Flex px={2} direction="column" flex={1}>
        <p className={css({ fontSize: { base: 'sm', md: 'md' }, fontWeight: 'bold', lineClamp: 1 })}>
          {thread.channel.movie.krTitle}
        </p>
        <p className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>전병민</p>
      </Flex>
      <Button variant="ghost" rounded="full" p={1}>
        <Icon name="moreVertical" size={16} />
      </Button>
    </Flex>
  );
}
