import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import type { Meta, StoryObj } from '@storybook/react';
import { Poster } from './poster';

const meta = {
  title: 'Components / Poster',
  component: Poster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <ul className={flex({ gap: 5, direction: 'row' })}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Poster>;

export default meta;
type Story = StoryObj<typeof Poster>;

export const WithSize: Story = {
  render: args => {
    return (
      <Poster
        src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
        alt="test"
        sizes="100px"
        className={css({ _groupHover: { transform: 'scale(1.05)' }, transition: 'all 150ms ease-in-out' })}
      />
    );
  },
};
