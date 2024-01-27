import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import { ImageSquare, PencilLine, TreasureChestOutline } from '@/assets/icons';
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
};

export const 흘러온_편지: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <Button variant="primary-unaccent">다시 흘려보내기</Button>
      <Button variant="primary">답장하기</Button>
    </Navbar>
  ),
};

export const 내게_온_답장: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <Button variant="primary-unaccent">닫기</Button>
      <Button variant="primary">
        <TreasureChestOutline color="#828282" />
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
      <Button variant="primary-unaccent">닫기</Button>
      <Button variant="primary">저장</Button>
    </Navbar>
  ),
};

export const 편지_작성하기: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <Button variant="primary-unaccent">뒤로</Button>
      <Button variant="primary">답장 보내기</Button>
      <div
        css={[
          buttonStyles.button('primary'),
          css`
            flex: 0;
            width: 1rem;
            margin-left: 0.75rem;
            padding: 0.625rem;
            border-radius: 0.5rem;
          `,
        ]}
      >
        <ImageSquare width={24} color="#4F4F4F" />
      </div>
    </Navbar>
  ),
};

export const 편지_쓰기: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <Button
        css={css`
          font-weight: 700;
          line-height: 2rem;
        `}
        variant="white"
      >
        <PencilLine width="20" />
        편지 쓰기
      </Button>
    </Navbar>
  ),
};

export const 온보딩: Story = {
  render: () => (
    <Navbar css={styles.navbar}>
      <div
        css={css`
          width: 12.5rem;
        `}
      >
        <Button
          css={css`
            width: 100%;
            font-weight: 700;
            line-height: 2rem;
          `}
          variant="white"
        >
          시작하기
        </Button>
      </div>
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
