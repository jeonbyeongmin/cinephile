import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@/components/icon';
import { flex } from '@/styled-system/patterns';
import { Input, inputStyles } from './input';

const meta = {
  title: 'Components / Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: {
      include: inputStyles.variantKeys,
    },
  },
  decorators: [
    Story => (
      <ul className={flex({ minW: 'xl', gap: 5, direction: 'column' })}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const WithSize: Story = {
  argTypes: { inputSize: { table: { disable: true } } },
  render: ({ size, ...rest }) => {
    return (
      <>
        {inputStyles.variantMap.inputSize.map((inputSize, index) => {
          return (
            <li key={index}>
              <Input
                {...rest}
                inputSize={inputSize}
                rounded="md"
                className={inputSize}
                placeholder={inputSize}
                color="gray.500"
              />
            </li>
          );
        })}
      </>
    );
  },
};

export const WithIcon: Story = {
  argTypes: { inputSize: { table: { disable: true } } },
  render: ({ size, ...rest }) => {
    return (
      <>
        {inputStyles.variantMap.inputSize.map((inputSize, index) => {
          return (
            <li key={index}>
              <Input
                {...rest}
                id={`input-${index}`}
                inputSize={inputSize}
                rounded="md"
                className={inputSize}
                placeholder={inputSize}
                color="gray.500"
                leftElement={<Icon name="search" size={20} />}
              />
            </li>
          );
        })}
      </>
    );
  },
};
