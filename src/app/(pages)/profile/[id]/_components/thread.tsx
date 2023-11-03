import Image from 'next/image';

import * as ThreadPrimitive from '@/components/primitive/thread';
import type { Thread as ThreadType } from '@/types/threads';

import { Icon, IconButton, Link } from '@/components/primitive';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';
import { getRelativeTime } from '@/utils';

interface Props {
  thread: ThreadType;
}

export function Thread({ thread }: Props) {
  return (
    <ThreadPrimitive.Root>
      <ThreadPrimitive.Header>
        <Link href={`/channel/${thread.channel.channelId}`}>
          <div className={posterContainerStyles}>
            <Image src={thread.channel.movie.posterPath} alt={thread.channel.movie.krTitle} sizes="10vw" fill />
          </div>
        </Link>
        <Flex px={2} direction="column" flex={1}>
          <Link
            href={`/channel/${thread.channel.channelId}`}
            className={css({ fontSize: { base: 'sm', md: 'md' }, fontWeight: 'bold', lineClamp: 1 })}
          >
            {thread.channel.movie.krTitle}
          </Link>
          <Flex align="center" gap={1} className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>
            <span>{thread.author.name}</span>
            <span>&#183;</span>
            <span>{getRelativeTime(thread.createdAt)}</span>
          </Flex>
        </Flex>
      </ThreadPrimitive.Header>
      <Link href={`/thread/${thread.threadId}`}>
        <ThreadPrimitive.Body title={thread.title}>
          <ThreadPrimitive.ExpandableContent content={thread.content} />
        </ThreadPrimitive.Body>
      </Link>
      <ThreadPrimitive.Footer>
        <IconButton
          icon={<Icon name="heart" fill="none" size={18} />}
          aria-label="like button"
          size="sm"
          variant="ghost"
          rounded="full"
        />
        <IconButton
          icon={<Icon name="reply" fill="none" size={18} />}
          aria-label="reply button"
          size="sm"
          variant="ghost"
          rounded="full"
        />
        <IconButton
          icon={<Icon name="share" fill="none" size={18} />}
          aria-label="share button"
          size="sm"
          variant="ghost"
          rounded="full"
        />
      </ThreadPrimitive.Footer>
    </ThreadPrimitive.Root>
  );
}

const posterContainerStyles = cx(
  aspectRatio({ ratio: 11 / 16 }),
  css({
    width: 8,
    rounded: 'xs',
    overflow: 'hidden',
    bg: 'gray.800',
  })
);
