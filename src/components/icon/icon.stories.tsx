import type { Meta, StoryObj } from '@storybook/react';

import { grid } from '@/styled-system/patterns';
import { Icon } from './icon';
import { iconMap, type IconName } from './icon-map';

const meta = {
  title: 'Components / Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <ul className={grid({ columns: 10 })}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
  args: {
    size: 24,
    color: 'currentColor',
  },
  render: args => {
    const { name, ...rest } = args;
    const icons = Object.keys(iconMap) as IconName[];

    return (
      <>
        {icons.map((name, index) => {
          return (
            <li key={index}>
              <Icon name={name} {...rest} />
            </li>
          );
        })}
      </>
    );
  },
};
