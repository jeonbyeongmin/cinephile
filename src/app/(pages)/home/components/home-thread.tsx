import { HomeThreadButtons } from '@/app/(pages)/home/components/home-thread-buttons';
import { DisclosableThreadContent, Poster, Thread, ThreadBody, ThreadFooter, ThreadHeader } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { type Thread as ThreadType } from '@/types/threads';
import { getRelativeTime } from '@/utils';

interface Props {
  thread: ThreadType;
}

export function HomeThread({ thread }: Props) {
  return (
    <Thread>
      <ThreadHeader>
        <div className={css({ w: '30px' })}>
          <Poster width="30px" src={thread.channel.movie.posterPath} alt={thread.channel.movie.originalTitle} />
        </div>
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
      </ThreadHeader>
      <ThreadBody title={thread.title}>
        <DisclosableThreadContent content={thread.content} />
      </ThreadBody>
      <ThreadFooter>
        <HomeThreadButtons />
      </ThreadFooter>
    </Thread>
  );
}
