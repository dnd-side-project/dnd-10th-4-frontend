import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '.';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 짧은_문장: Story = {
  args: {
    id: '1',
    text: '세 줄이 넘어가면 "펼치기" 버튼이 생깁니다. 그리고 스토리북에서 날짜 바꾸면 에러 발생합니다. 화면 사이즈를 줄여서 세 줄이 넘어가면 "펼치기" 버튼이 생깁니다.',
    date: new Date(),
  },
};

export const 긴_문장: Story = {
  args: {
    id: '2',
    text: '여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대로 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오',
    date: new Date(),
  },
};
