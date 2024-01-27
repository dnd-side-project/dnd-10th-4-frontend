import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '.';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 보관함_짧은_문장_2줄: Story = {
  args: {
    id: '1',
    text: '스토리북에서 날짜 바꾸면 에러가 발생합니다. line 값을 사용해 컴포넌트의 표시될 줄을 설정할 수 있습니다. 화면 사이즈를 줄여서 설정한 줄이 넘어가면 "펼치기" 버튼이 생깁니다.',
    date: new Date(),
    line: 2,
  },
};

export const 보관함_긴_문장_3줄: Story = {
  args: {
    id: '2',
    text: '여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대로 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오',
    date: new Date(),
    line: 3,
  },
};

export const 보내기_사진_유_2줄: Story = {
  args: {
    id: '3',
    text: '여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대로 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요',
    date: new Date(),
    line: 2,
    type: 'send',
    imgUrl:
      'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg',
  },
};

export const 보내기_사진_무_1줄: Story = {
  args: {
    id: '3',
    text: '여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대로 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소',
    date: new Date(),
    line: 1,
    type: 'send',
  },
};
