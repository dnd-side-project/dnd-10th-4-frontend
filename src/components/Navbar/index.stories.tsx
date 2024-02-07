import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { ImageSquare, PencilLine, TreasureChestOutline } from '@/assets/icons';
import COLORS from '@/constants/colors';
import KakaoLoginButton from '../KakaoLoginButton';
import Button, { buttonStyles } from '../Button';
import Navbar from './';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  navbar: css`
    width: 390px;
    background-color: #fcecd0;
  `,
  편지_작성하기: {
    iconContainer: css`
      flex-grow: 0;
      margin-left: 0.75rem;
      padding: 0.5rem 0.75rem;
      border: none;
      border-radius: 0.5rem;
    `,
  },
};

export const 흘러온_편지: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <Button variant="secondary" size="sm">
        다시 흘려보내기
      </Button>
      <Button variant="primary" size="sm">
        답장하기
      </Button>
    </Navbar>
  ),
};

export const 내게_온_답장: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <Button variant="semi-transparent-unaccent" size="sm">
        닫기
      </Button>
      <Button variant="semi-transparent" size="sm">
        <TreasureChestOutline />
        보관하기
      </Button>
    </Navbar>
  ),
};

export const 사진: Story = {
  render: () => (
    <Navbar
      css={css`
        width: 17.5rem;
        background-color: rgb(0 0 0 / 0.6);
        backdrop-filter: blur(2px);
      `}
    >
      <Button variant="semi-transparent-unaccent" size="sm">
        닫기
      </Button>
      <Button variant="semi-transparent" size="sm">
        저장
      </Button>
    </Navbar>
  ),
};

export const 편지_작성하기: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <Button variant="secondary" size="sm">
        뒤로
      </Button>
      <Button variant="primary" size="sm">
        답장 보내기
      </Button>
      <div
        css={[
          buttonStyles.button('semi-transparent', 'sm', 'md'),
          styles.편지_작성하기.iconContainer,
        ]}
      >
        <ImageSquare color={COLORS.gray2} />
      </div>
    </Navbar>
  ),
};

export const 편지_쓰기: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <Button variant="primary">
        <PencilLine />
        편지 쓰러 가기
      </Button>
    </Navbar>
  ),
};

export const 로그인: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <KakaoLoginButton />
    </Navbar>
  ),
};
