import type { Meta, StoryObj } from '@storybook/react';

import { Spinner, spinner } from '@/components/primitive/spinner/spinner';
import { flex } from '@/styled-system/patterns';

const meta = {
  title: 'Components / Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      include: spinner.variantKeys,
    },
  },
  decorators: [
    Story => (
      <ul className={flex({ gap: 5, direction: 'row' })}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: args => {
    return <Spinner {...args} />;
  },
};

export const WithSize: Story = {
  argTypes: { size: { table: { disable: true } } },
  render: args => {
    return (
      <>
        {spinner.variantMap.size.map((size, index) => {
          return (
            <li key={index}>
              <Spinner {...args} size={size} />
            </li>
          );
        })}
      </>
    );
  },
};

export const WithColorPalette: Story = {
  argTypes: { colorPalette: { table: { disable: true } } },
  render: args => {
    return (
      <>
        {spinner.variantMap.colorPalette.map((colorPalette, index) => {
          return (
            <li key={index}>
              <Spinner {...args} colorPalette={colorPalette} />
            </li>
          );
        })}
      </>
    );
  },
};
