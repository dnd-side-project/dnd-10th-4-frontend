import type { Meta, StoryObj } from '@storybook/react';
import TagList from '.';

const meta = {
  title: 'Components/TagList',
  component: TagList,
  tags: ['autodocs'],
} satisfies Meta<typeof TagList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tags: ['17~20', '모두에게', '진로'],
    variant: 'tag',
  },
};
