import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import Person from '@/assets/icons/person.svg?react';
import RightArrow from '@/assets/icons/rightArrow.svg?react';
import LeftArrow from '@/assets/icons/leftArrow.svg?react';
import Heart from '@/assets/icons/heart.svg?react';
import IconButton from './';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  iconContainer: css`
    display: flex;
    gap: 20px;
  `,
};

export const Primary: Story = {
  args: {
    variant: 'header',
    children: <Person />,
  },
};

export const 아이콘_버튼: StoryObj = {
  name: '아이콘 버튼(상단, 하단, 오른쪽, 왼쪽 화살표)',
  render: () => (
    <div css={styles.iconContainer}>
      <IconButton>
        <Person />
      </IconButton>
      <IconButton variant="bottom">
        <Heart />
      </IconButton>
      <IconButton variant="leftCarousel">
        <LeftArrow />
      </IconButton>
      <IconButton variant="rightCarousel">
        <RightArrow />
      </IconButton>
    </div>
  ),
};
