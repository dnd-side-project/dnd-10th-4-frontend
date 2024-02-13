import { css } from '@emotion/react';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const ReplyLetter = () => {
  return (
    <LetterCard isOpen={true}>
      <LetterHeader nickname="낯선 강아지" />
      <p css={style.letter}>
        여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러
        괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나
        기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로
        받아두겠소
      </p>
      <div css={style.date}>24년 02월 13일</div>
      <LetterHeader title="From" titlePosition="right" nickname="낯선 고양이" />
    </LetterCard>
  );
};

export default ReplyLetter;

const style = {
  letter: css`
    height: 15rem;
    ${textStyles.l1m}
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 3.5rem;
    ${textStyles.c1r};
    color: ${COLORS.gray4};
  `,
};
