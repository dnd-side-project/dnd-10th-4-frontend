import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LetterCard from '../LetterCard';
import LetterTextarea from '../LetterTextarea';
import LetterLengthDate from '.';

const meta = {
  title: 'Components/Letter/LetterLengthDate',
  component: LetterLengthDate,
  tags: ['autodocs'],
} satisfies Meta<typeof LetterLengthDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    letterLength: 0,
  },
};

export const 편지지: StoryObj = {
  render: () => {
    const LetterComponent = () => {
      const [text, setText] = useState<string>('');

      const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
      };

      return (
        <LetterCard isOpen={true}>
          <LetterTextarea
            name="스토리북테스트"
            placeholder="편지지 내용입니다."
            onChange={handleChange}
          />
          <LetterLengthDate letterLength={text.length} />
        </LetterCard>
      );
    };
    return <LetterComponent />;
  },
};
