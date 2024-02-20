import type { Meta, StoryObj } from '@storybook/react';
import { MoreHorizontal, Copy, TrashCan } from '@/assets/icons';
import COLORS from '@/constants/colors';
import Dropdown from '.';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 드롭다운: Story = {
  args: {
    triggerComponent: <MoreHorizontal />,
    options: [
      {
        icon: <Copy width={20} height={20} />,
        label: '복사하기',
        onClick: () => {
          console.log('복사히기 클릭');
        },
        color: COLORS.gray2,
      },
      {
        icon: <TrashCan width={20} height={20} />,
        label: '삭제하기',
        onClick: () => {
          console.log('삭제하기 클릭');
        },
        color: COLORS.danger,
      },
    ],
  },
};
