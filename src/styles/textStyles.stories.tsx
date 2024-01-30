import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import textStyles from './textStyles';

const meta = {
  title: 'Styles/Text',
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '텍스트 스타일을 정의합니다.',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,
  textSection: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,
};

export const 모든_텍스트_보기: Story = {
  args: {},
  render: () => (
    <div css={styles.container}>
      <div css={styles.textSection}>
        <h1 css={textStyles.t1}>Title / T1-24px(sb)</h1>
        <h1 css={textStyles.t2}>Title / T2-20px(sb)</h1>
        <h1 css={textStyles.t3}>Title / T3-16px(sb)</h1>
        <h1 css={textStyles.t4}>Title / T4-14px(sb)</h1>
      </div>
      <div css={styles.textSection}>
        <p css={textStyles.b1m}>body / b1-24px(m)</p>
        <p css={textStyles.b2m}>body / b2-20px(m)</p>
        <p css={textStyles.b3m}>body / b3-18px(m)</p>
        <p css={textStyles.b4m}>body / b4-14px(m)</p>
      </div>
      <div css={styles.textSection}>
        <p css={textStyles.b1R}>body / b1-24px(R)</p>
        <p css={textStyles.b2R}>body / b2-20px(R)</p>
        <p css={textStyles.b3R}>body / b3-18px(R)</p>
        <p css={textStyles.b4R}>body / b4-14px(R)</p>
      </div>
      <div css={styles.textSection}>
        <p css={textStyles.c1sb}>caption / c1-12px(sb)</p>
        <p css={textStyles.c1m}>caption / c1-12px(m)</p>
        <p css={textStyles.c1r}>caption / c1-12px(r)</p>
      </div>
      <div css={styles.textSection}>
        <p css={textStyles.l1m}>letter / l1-14px(m)</p>
      </div>
      <div css={styles.textSection}>
        <p css={textStyles.description}>24년 01월 20일</p>
      </div>
    </div>
  ),
};
