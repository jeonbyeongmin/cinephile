import type { Meta, StoryObj } from '@storybook/react';

import { buttonRecipe } from '@/components/button/recipe';
import { flex } from '@/styled-system/patterns';
import { Button } from './button';

const meta = {
  title: 'Components / Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      include: buttonRecipe.variantKeys,
    },
  },

  decorators: [
    Story => (
      <ul className={flex({ gap: 5, direction: 'row' })}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const WithVariant: Story = {
  argTypes: { variant: { table: { disable: true } } },
  render: args => {
    return (
      <>
        {buttonRecipe.variantMap.variant.map((variant, index) => {
          return (
            <li key={index}>
              <Button {...args} variant={variant} rounded="md" className={variant}>
                {variant}
              </Button>
            </li>
          );
        })}
      </>
    );
  },
};

export const WithSize: Story = {
  argTypes: { size: { table: { disable: true } } },
  render: args => {
    return (
      <>
        {buttonRecipe.variantMap.size.map((size, index) => {
          return (
            <li key={index}>
              <Button {...args} size={size} rounded="md" className={size}>
                {size}
              </Button>
            </li>
          );
        })}
      </>
    );
  },
};
