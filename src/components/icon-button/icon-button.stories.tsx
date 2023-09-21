import type { Meta, StoryObj } from '@storybook/react';

import { buttonStyles } from '@/components/button';
import { Icon } from '@/components/icon/icon';
import { flex } from '@/styled-system/patterns';
import { IconButton } from './icon-button';

const meta = {
  title: 'Components / IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      include: buttonStyles.variantKeys,
    },
  },
  decorators: [
    Story => (
      <ul className={flex({ gap: 5, direction: 'row' })}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const WithVariant: Story = {
  argTypes: { variant: { table: { disable: true } } },
  render: args => {
    return (
      <>
        {buttonStyles.variantMap.variant.map((variant, index) => {
          return (
            <li key={index}>
              <IconButton
                {...args}
                variant={variant}
                rounded="md"
                className={variant}
                icon={<Icon name="change" size={18} />}
              />
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
        {buttonStyles.variantMap.size.map((size, index) => {
          return (
            <li key={index}>
              <IconButton {...args} size={size} rounded="md" className={size} icon={<Icon name="change" size={18} />}>
                {size}
              </IconButton>
            </li>
          );
        })}
      </>
    );
  },
};
