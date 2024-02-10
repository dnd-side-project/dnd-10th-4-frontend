import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import PolaroidModal from '.';

const meta = {
  title: 'Components/PolaroidModal',
  component: PolaroidModal,
  tags: ['autodocs'],
} satisfies Meta<typeof PolaroidModal>;

export default meta;

export const 폴라로이드_모달: StoryObj = {
  render: () => (
    <PolaroidModal img="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg">
      <Button variant="secondary" size="sm">
        닫기
      </Button>
    </PolaroidModal>
  ),
};
