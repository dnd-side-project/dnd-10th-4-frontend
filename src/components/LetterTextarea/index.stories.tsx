import type { Meta, StoryObj } from '@storybook/react';
import LetterCard from '../LetterCard';
import LetterTextarea from '.';

const meta = {
  title: 'Components/LetterTextarea',
  component: LetterTextarea,
  tags: ['autodocs'],
} satisfies Meta<typeof LetterTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'letter',
    placeholder: 'LetterTextarea 컴포넌트 입니다.',
  },
};

export const 편지지: StoryObj = {
  render: () => (
    <LetterCard isOpen={true}>
      <LetterTextarea name="스토리북테스트" placeholder="편지지 내용입니다." />
    </LetterCard>
  ),
};
