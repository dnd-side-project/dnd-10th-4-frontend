import type { Meta, StoryObj } from '@storybook/react';
import LetterCard from '../LetterCard';
import LetterHeader from '.';

const meta = {
  title: 'Components/Letter/LetterHeader',
  component: LetterHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof LetterHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'From',
    titlePosition: 'right',
    nickname: '낯선 고양이',
  },
};

export const 편지지: StoryObj = {
  render: () => (
    <LetterCard isOpen={true}>
      <LetterHeader title="To" nickname="낯선 고양이" />
    </LetterCard>
  ),
};
