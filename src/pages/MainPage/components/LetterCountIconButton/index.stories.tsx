import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import LetterCountIconButton from '.';

const meta = {
  title: 'Pages/MainPage/LetterCountIconButton',
  component: LetterCountIconButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LetterCountIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  container: css`
    position: relative;
    width: 100%;
    padding: 1rem;
    background-color: #86d6fd;
  `,
};

export const Primary: Story = {
  args: {},
  decorators: (Story) => (
    <div css={styles.container}>
      <Suspense fallback={<>로딩중...</>}>
        <Story />
      </Suspense>
    </div>
  ),
};
