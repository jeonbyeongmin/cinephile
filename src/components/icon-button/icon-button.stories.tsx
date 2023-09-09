import type { Meta, StoryObj } from '@storybook/react';

import { buttonStyles } from '@/components/button';
import { flex } from '@/styled-system/patterns';
import { IconButton } from './icon-button';

const meta = {
  title: 'Components / IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <ul className={flex({ gap: 5, direction: 'column' })}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const WithVariant: Story = {
  render: args => {
    const { variant, ...rest } = args;

    return (
      <>
        {buttonStyles.variantMap.variant.map((variant, index) => {
          return (
            <li key={index}>
              <IconButton {...rest} variant={variant} css={{ px: 4, py: 2 }} rounded="md" className={variant}>
                {variant}
              </IconButton>
            </li>
          );
        })}
      </>
    );
  },
};

export const WithSize: Story = {
  render: args => {
    const { size, ...rest } = args;

    return (
      <>
        {buttonStyles.variantMap.size.map((size, index) => {
          return (
            <li key={index}>
              <IconButton {...rest} size={size} css={{ px: 4, py: 2 }} rounded="md" className={size}>
                {size}
              </IconButton>
            </li>
          );
        })}
      </>
    );
  },
};
