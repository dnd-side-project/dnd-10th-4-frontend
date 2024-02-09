import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import LetterAccordion from '.';

const meta = {
  title: 'Components/Letter/LetterAccordion',
  component: LetterAccordion,
  tags: ['autodocs'],
} satisfies Meta<typeof LetterAccordion>;

export default meta;

const styles = {
  container: css`
    max-width: 600px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
  `,
};

export const 보관함_짧은_문장_2줄: StoryObj = {
  render: () => (
    <div css={styles.container}>
      <LetterAccordion
        id="1"
        text='line 값을 사용해 컴포넌트의 표시될 줄을 설정할 수 있습니다. 화면 사이즈를 줄여서 설정한 줄이 넘어가면 "펼치기" 버튼이 생깁니다.'
        date={new Date()}
        line={2}
      />
    </div>
  ),
};

export const 보관함_긴_문장_3줄: StoryObj = {
  render: () => (
    <div css={styles.container}>
      <LetterAccordion
        id="2"
        text="여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대로 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오"
        date={new Date()}
        line={3}
      />
    </div>
  ),
};

export const 보내기_사진_O_2줄: StoryObj = {
  render: () => (
    <div css={styles.container}>
      <LetterAccordion
        id="3"
        text="여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만라겠소 이 맘만 가져가오"
        date={new Date()}
        line={2}
        type="send"
        imgUrl="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg"
      />
    </div>
  ),
};

export const 보내기_사진_X_1줄: StoryObj = {
  render: () => (
    <div css={styles.container}>
      <LetterAccordion
        id="4"
        text="여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대로 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소"
        date={new Date()}
        line={1}
        type="send"
      />
    </div>
  ),
};
