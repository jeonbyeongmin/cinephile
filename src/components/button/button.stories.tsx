import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@/styled-system/jsx';
import { Button } from './button';

const meta = {
  title: 'Component / Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const WithVariant: Story = {
  render: args => {
    return (
      <Flex gap={5}>
        <Button {...args} variant="solid" css={{ px: 4, py: 2 }} className="solid">
          solid
        </Button>
        <Button {...args} variant="outline" css={{ px: 4, py: 2 }} className="outline">
          outline
        </Button>
        <Button {...args} variant="ghost" css={{ px: 4, py: 2 }} className="ghost">
          ghost
        </Button>
        <Button {...args} variant="link" css={{ px: 4, py: 2 }} className="link">
          link
        </Button>
      </Flex>
    );
  },
};

export const WithColorPalette: Story = {
  render: args => {
    return (
      <Flex gap={5}>
        <Button {...args} css={{ px: 4, py: 2 }} colorPalette="blue">
          blue
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} colorPalette="gray">
          gray
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} colorPalette="red">
          red
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} colorPalette="yellow">
          yellow
        </Button>
      </Flex>
    );
  },
};

export const WithRounded: Story = {
  render: args => {
    return (
      <Flex gap={5} direction="column">
        <Button {...args} css={{ px: 4, py: 2 }} rounded="sm">
          sm rounded button
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} rounded="md">
          md rounded button
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} rounded="lg">
          lg rounded button
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} rounded="xl">
          xl rounded button
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} rounded="2xl">
          2xl rounded button
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} rounded="3xl">
          3xl rounded button
        </Button>
        <Button {...args} css={{ px: 4, py: 2 }} rounded="full">
          full rounded button
        </Button>
      </Flex>
    );
  },
};
