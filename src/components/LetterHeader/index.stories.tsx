import type { Meta, StoryObj } from '@storybook/react';
import LetterCard from '../LetterCard';
import LetterHeader from '.';

const meta = {
  title: 'Components/LetterHeader',
  component: LetterHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof LetterHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fromOrTo: 'To',
    nickname: '낯선 고양이',
    tagList: ['10~40', '모두에게', '기타'],
  },
};

export const 편지지: StoryObj = {
  render: () => (
    <LetterCard isOpen={true}>
      <LetterHeader
        fromOrTo="From"
        nickname="낯선 고양이"
        tagList={['10~40', '모두에게', '기타']}
        isMoreIcon={true}
      />
    </LetterCard>
  ),
};
