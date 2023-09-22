import type { Meta, StoryObj } from '@storybook/react';

import { getThread } from '@/api/threads';
import { Avatar } from '@/components/avatar';
import { Poster } from '@/components/poster';
import { threadsHandlers } from '@/mocks/handlers/threads.handlers';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
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

export const ExpandableWithMovie: Story = {
  render: (_, { loaded: { thread } }) => {
    return (
      <Thread.Root>
        <Thread.Header>
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
