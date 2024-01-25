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

const styles = {
  iconContainer: css`
    display: flex;
    gap: 20px;
  `,
};

export const 상단_하단_아이콘_버튼: StoryObj = {
  render: () => (
    <div css={styles.iconContainer}>
      <IconButton>
        <Person />
      </IconButton>
      <IconButton variant="bottom">
        <Heart />
      </IconButton>
    </div>
  ),
};

export const 화살표_아이콘_버튼: StoryObj = {
  render: () => (
    <div css={styles.iconContainer}>
      <IconButton variant="leftArrow">
        <LeftArrow />
      </IconButton>
      <IconButton variant="rightArrow">
        <RightArrow />
      </IconButton>
    </div>
  ),
};
