import type { Meta, StoryObj } from '@storybook/react';
import LetterCard from '../LetterCard';
import Polaroid from '.';

const meta = {
  title: 'Components/Polaroid',
  component: Polaroid,
  tags: ['autodocs'],
} satisfies Meta<typeof Polaroid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgUrl:
      'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg',
  },
};

export const 편지지_폴라로이드: StoryObj = {
  render: () => (
    <>
      <LetterCard isOpen={true}>
        <Polaroid imgUrl="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg" />
      </LetterCard>
    </>
  ),
};

export const 사진_추가_폴라로이드: StoryObj = {
  render: () => (
    <>
      <LetterCard isOpen={true}>
        <Polaroid />
      </LetterCard>
    </>
  ),
};
