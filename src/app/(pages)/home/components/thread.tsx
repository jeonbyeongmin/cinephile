import { ThreadContent } from '@/app/(pages)/home/components/thread-content';
import { ThreadPoster } from '@/app/(pages)/home/components/thread-poster';
import { Button, Icon } from '@/components/base';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import type { Thread } from '@/types/threads';

interface ThreadProps {
  thread: Thread;
}

export function Thread({ thread }: ThreadProps) {
  return (
    <Flex direction="column" bg="gray.950" px={3} py={4}>
      <Flex align="start" mb={1}>
        <ThreadPoster posterPath={thread.channel.movie.posterPath} krTitle={thread.channel.movie.krTitle} />
        <Flex px={2} direction="column" flex={1}>
          <p className={css({ fontWeight: 'bold', lineClamp: 1 })}>{thread.channel.movie.krTitle}</p>
          <p className={css({ fontSize: 'sm', color: 'gray.400' })}>전병민</p>
        </Flex>
        <Button variant="ghost" rounded="full" p={1}>
          <Icon name="moreVertical" size={16} />
        </Button>
      </Flex>
      <ThreadContent content={thread.content} />
      <Flex mt={2}>
        <Button variant="ghost" p={2} rounded="full">
          <Icon name="heart" fill="none" size={16} />
        </Button>
        <Button variant="ghost" p={2} rounded="full">
          <Icon name="reply" fill="none" size={16} />
        </Button>
        <Button variant="ghost" p={2} rounded="full">
          <Icon name="share" fill="none " size={16} />
        </Button>
      </Flex>
    </Flex>
  );
}
