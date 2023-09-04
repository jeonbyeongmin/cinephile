import { threadMockData } from '@/mocks/data/threads.data';
import type { Meta, StoryObj } from '@storybook/react';
import { Thread } from './thread';

const meta = {
  title: 'Component / Thread',
  component: Thread,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Thread>;

export default meta;
type Story = StoryObj<typeof Thread>;

export const Primary: Story = {
  render: args => {
    return (
      <div>
        <Thread thread={threadMockData.thread} />
      </div>
    );
  },
};
