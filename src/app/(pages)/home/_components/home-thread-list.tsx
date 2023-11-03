'use client';

import Image from 'next/image';

import { ThreadList } from '@/components/domain';
import { Icon, IconButton, Link } from '@/components/primitive';
import * as Thread from '@/components/primitive/thread';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';
import { getRelativeTime } from '@/utils';

interface Props {
  type: 'hot' | 'new';
}

export function HomeThreadList({ type }: Props) {
  return (
    <ThreadList type={type}>
      {({ thread }) => (
        <Thread.Root>
          <Thread.Header>
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
          </Thread.Header>
          <Link href={`/thread/${thread.threadId}`}>
            <Thread.Body title={thread.title}>
              <Thread.ExpandableContent content={thread.content} />
            </Thread.Body>
          </Link>
          <Thread.Footer>
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
          </Thread.Footer>
        </Thread.Root>
      )}
    </ThreadList>
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
