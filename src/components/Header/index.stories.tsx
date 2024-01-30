import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import {
  LeftArrow,
  Siren,
  HourGlass,
  SoundOn,
  User,
  TreasureChestOutline,
} from '@/assets/icons';
import COLORS from '@/constants/colors';
import IconButton from '../IconButton';
import Header from './';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  background: css`
    background-color: #94d1f5;
    color: white;
  `,
  icon: css`
    cursor: pointer;
  `,
  메인_페이지: {
    rightStyle: css`
      display: flex;
      gap: 0.5rem;
      margin-right: 1rem;
      color: white;
    `,
    emptyBox: css`
      width: 1.5rem;
      height: 1.5rem;
      background: ${COLORS.gray6};
    `,
    countChip: css`
      display: flex;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem 1rem;
      border: 1px solid rgb(255 255 255 / 0.3);
      border-radius: 0.75rem;
      background: radial-gradient(
        491.85% 132.88% at 0% 12.5%,
        rgb(255 255 255 / 0.75) 0%,
        rgb(255 255 255 / 0.5) 100%
      );
      color: black;
      backdrop-filter: blur(2px);
    `,
  },
  흘러온_편지: {
    timeChip: css`
      display: flex;
      gap: 0.25rem;
      justify-content: center;
      align-items: center;
      margin-left: 0.25rem;
      padding: 0.5rem 1rem;
      border-radius: 6.25rem;
      background-color: #fff;
      color: black;
      font-weight: 500;
      line-height: 1rem;
    `,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    leftContent: <>왼쪽</>,
    centerContent: <>가운데</>,
    rightContent: <>오른쪽</>,
  },
  decorators: [
    (Story) => (
      <div css={styles.background}>
        <Story />
      </div>
    ),
  ],
};
export const 메인_페이지: Story = {
  ...Primary,
  render: () => (
    <Header
      variant="none"
      leftContent={
        <div css={styles.메인_페이지.countChip}>
          <div css={styles.메인_페이지.emptyBox} />
          <p>N개</p>
        </div>
      }
      rightContent={
        <>
          <IconButton variant="header">
            <SoundOn color="white" />
          </IconButton>
          <IconButton variant="header">
            <User color="white" />
          </IconButton>
          <IconButton variant="header">
            <TreasureChestOutline color="white" />
          </IconButton>
        </>
      }
      rightStyle={styles.메인_페이지.rightStyle}
    />
  ),
};

export const 흘러온_편지: Story = {
  ...Primary,
  render: () => (
    <Header
      variant="none"
      leftContent={
        <>
          <LeftArrow css={styles.icon} strokeWidth={2} />
          <div css={styles.흘러온_편지.timeChip}>
            <HourGlass color={COLORS.gray3} />
            <p>26h</p>
          </div>
        </>
      }
      rightContent={
        <IconButton>
          <Siren color="white" />
        </IconButton>
      }
    />
  ),
};

export const 보관함_편지: Story = {
  ...Primary,
  render: () => (
    <Header
      variant="none"
      leftContent={<LeftArrow css={styles.icon} strokeWidth={2} />}
      centerContent={<>보관함</>}
    />
  ),
};

export const 보관함_편지_Secondary: Story = {
  ...Primary,
  render: () => (
    <Header
      variant="secondary"
      leftContent={<LeftArrow css={styles.icon} strokeWidth={2} />}
      centerContent={<>보관함</>}
    />
  ),
};
