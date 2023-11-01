import type { Meta, StoryObj } from '@storybook/react';

import { avatarRecipe } from '@/components/primitive/avatar/recipe';
import { flex } from '@/styled-system/patterns';
import { Avatar } from './avatar';

const meta = {
  title: 'Components / Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      include: avatarRecipe.variantKeys,
    },
  },

  decorators: [
    Story => (
      <ul className={flex({ gap: 5, direction: 'row' })}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  argTypes: { size: { table: { disable: true } } },
  render: args => {
    return (
      <>
        {avatarRecipe.variantMap.size.map((size, index) => {
          return (
            <li key={index}>
              <Avatar {...args} size={size} className={size}>
                {size}
              </Avatar>
            </li>
          );
        })}
      </>
    );
  },
};

export const ExternalImage: Story = {
  argTypes: { size: { table: { disable: true } } },
  render: args => {
    return (
      <>
        {avatarRecipe.variantMap.size.map((size, index) => {
          return (
            <li key={index}>
              <Avatar {...args} src="https://avatars.githubusercontent.com/u/1004701?v=4" size={size} className={size}>
                {size}
              </Avatar>
            </li>
          );
        })}
      </>
    );
  },
};

export const WithVariant: Story = {
  argTypes: { variant: { table: { disable: true } } },
  render: args => {
    return (
      <>
        {avatarRecipe.variantMap.variant.map((variant, index) => {
          return (
            <li key={index}>
              <Avatar {...args} variant={variant}>
                {variant}
              </Avatar>
            </li>
          );
        })}
      </>
    );
  },
};
