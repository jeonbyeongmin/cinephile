import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@/components/icon';
import { flex } from '@/styled-system/patterns';
import { Input, inputStyles } from './input';

const meta = {
  title: 'Component / Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: {
      include: inputStyles.variantKeys,
    },
  },
  argTypes: {
    inputSize: { control: { type: 'select', options: inputStyles.variantMap.inputSize } },
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
  render: args => {
    const { size, ...rest } = args;

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
  render: args => {
    const { size, ...rest } = args;

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
                leftElement={<Icon name="search" size={20} />}
              />
            </li>
          );
        })}
      </>
    );
  },
};
