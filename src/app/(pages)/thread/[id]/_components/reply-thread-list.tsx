'use client';

import * as Thread from '@/components/primitive/thread';

import { ThreadList } from '@/components/domain';
import { Avatar, Icon, IconButton } from '@/components/primitive';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { getRelativeTime } from '@/utils';

interface Props {
  type?: 'hot' | 'new';
  parentId: string;
}

export function ReplyThreadList({ type = 'hot', parentId }: Props) {
  return (
    <ThreadList type={type} parentId={parentId}>
      {({ thread }) => (
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
            <Thread.ExpandableContent content={thread.content} />
          </Thread.Body>
          <Thread.Footer>
            <IconButton
              icon={<Icon name="heart" fill="none" size={18} />}
              aria-label="like button"
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
