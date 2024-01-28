import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { Person, RightArrow, LeftArrow, Heart } from '@/assets/icons';
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
    children: <Person color="white" />,
  },
};

export const 아이콘_버튼: StoryObj = {
  name: '아이콘 버튼(상단, 하단, 오른쪽, 왼쪽 화살표)',
  render: () => (
    <div css={styles.iconContainer}>
      <IconButton>
        <Person color="white" />
      </IconButton>
      <IconButton variant="bottom">
        <Heart color="white" />
      </IconButton>
      <IconButton variant="leftCarousel">
        <LeftArrow color="white" />
      </IconButton>
      <IconButton variant="rightCarousel">
        <RightArrow color="white" />
      </IconButton>
    </div>
  ),
};
