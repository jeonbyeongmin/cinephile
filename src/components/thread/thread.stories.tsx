import Image from 'next/image';

import type { Meta, StoryObj } from '@storybook/react';

import { getThread } from '@/api/threads';
import { Avatar } from '@/components/avatar';
import { threadsHandlers } from '@/mocks/handlers/threads.handlers';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';
import { getRelativeTime } from '@/utils';
import * as Thread from './index';

const meta = {
  title: 'Components / Thread',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    msw: { handlers: threadsHandlers },
  },
  decorators: [
    Story => (
      <div className={css({ w: '500px' })}>
        <Story />
      </div>
    ),
  ],
  loaders: [
    async () => {
      const { thread } = await getThread({ id: 0 });
      return { thread };
    },
  ],
} satisfies Meta<typeof Thread>;

export default meta;
type Story = StoryObj<typeof Thread>;

const posterContainerStyles = cx(
  aspectRatio({ ratio: 11 / 16 }),
  css({
    width: 8,
    rounded: 'xs',
    overflow: 'hidden',
    bg: 'gray.800',
  })
);


export const ExpandableWithMovie: Story = {
  render: (_, { loaded: { thread } }) => {
    return (
      <Thread.Root>
        <Thread.Header>
        <div className={posterContainerStyles}>
            <Image src={thread.channel.movie.posterPath} alt={thread.channel.movie.krTitle} sizes="10vw" fill />
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
        </Thread.Header>
        <Thread.Body title={thread.title}>
          <Thread.ExpandableContent content={thread.content} />
        </Thread.Body>
        <Thread.Footer>
          <Thread.Buttons />
        </Thread.Footer>
      </Thread.Root>
    );
  },
};

export const ExpandedWithUser: Story = {
  render: (_, { loaded: { thread } }) => {
    return (
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
          <Thread.Content content={thread.content} />
        </Thread.Body>
        <Thread.Footer>
          <Thread.Buttons />
        </Thread.Footer>
      </Thread.Root>
    );
  },
};
