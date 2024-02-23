import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './';

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
