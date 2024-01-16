import type { Meta, StoryObj } from '@storybook/react';
import EmotionTestButton from './EmotionTestButton';

const meta = {
  title: 'Components/EmotionTestButton',
  component: EmotionTestButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} satisfies Meta<typeof EmotionTestButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '스토리북 테스트',
    size: 'small',
  },
};
