import type { Meta, StoryObj } from '@storybook/react';
import MusicButton from './';

const meta = {
  title: 'Components/MusicButton',
  component: MusicButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MusicButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'white',
  },
};
