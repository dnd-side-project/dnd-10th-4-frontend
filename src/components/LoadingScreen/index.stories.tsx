import type { Meta, StoryObj } from '@storybook/react';
import LoadingScreen from './';

const meta = {
  title: 'Components/LoadingScreen',
  component: LoadingScreen,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoadingScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
