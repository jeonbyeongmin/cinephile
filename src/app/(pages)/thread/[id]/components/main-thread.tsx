import { ThreadButtons } from '@/app/(pages)/thread/[id]/components/thread-buttons';
import { Avatar, SanitizedContent, Thread, ThreadBody, ThreadFooter, ThreadHeader } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { type Thread as ThreadType } from '@/types/threads';
import { getRelativeTime } from '@/utils';

interface Props {
  thread: ThreadType;
}

export function MainThread({ thread }: Props) {
  return (
    <Thread>
      <ThreadHeader>
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
      </ThreadHeader>
      <ThreadBody title={thread.title}>
        <SanitizedContent content={thread.content} />
      </ThreadBody>
      <ThreadFooter>
        <ThreadButtons />
      </ThreadFooter>
    </Thread>
  );
}
