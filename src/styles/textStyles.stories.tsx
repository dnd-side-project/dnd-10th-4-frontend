import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import textStyles, { type TextVariant } from './textStyles';

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
} satisfies Meta<{ variant: TextVariant }>;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = {
  buttonBackground: css`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #fcecd0;
  `,
};

export const 모든_속성_보기: Story = {
  args: {},
  render: () => (
    <>
      <h1 css={textStyles('heading')}>누구에게 보낼까요?</h1>
      <p css={textStyles('thin')}>
        여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러
        괴롭히지는 않겠소
      </p>
      <div css={styles.buttonBackground}>
        <Button variant="primary" css={textStyles('button')}>
          선택 완료
        </Button>
        <Button variant="white" css={textStyles('button-bold')}>
          시작하기
        </Button>
      </div>
      <p css={textStyles('description')}>24년 01월 20일에 받은 편지</p>
    </>
  ),
};
