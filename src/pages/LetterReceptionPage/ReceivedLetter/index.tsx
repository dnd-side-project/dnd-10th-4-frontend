import { css } from '@emotion/react';
import LetterCard from '@/components/LetterCard';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import LetterHeader from '@/components/LetterHeader';
import Chip from '@/components/Chip';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import LetterContent from '../components/LetterContent';

interface ReceivedLetterProps {
  onNext: () => void;
}

const ReceivedLetter = ({ onNext }: ReceivedLetterProps) => {
  const tagList = ['20~24세', '모두에게', '기타'];

  return (
    <LetterContent>
      <LetterCard isOpen={true}>
        <div css={style.tag}>
          {tagList.map((tag) => (
            <Chip key={tag} variant="filter">
              {tag}
            </Chip>
          ))}
        </div>
        <div css={style.text}>
          <p>
            여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대
            부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘
            다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대
            있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는
            동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴
            그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오
            사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을
            견뎌 왔음에 감사하오 좋은 사람 만라겠소 이 맘만 가져가오
          </p>
        </div>
        <div css={style.date}>
          <span>24년 02월 08일</span>
        </div>
        <LetterHeader
          title="From"
          titlePosition="right"
          nickname="낯선 고양이"
        />
        <ReceptionPolaroid />
      </LetterCard>
      <Navbar css={style.navbar}>
        <Button variant="secondary" size="sm">
          다시 흘려보내기
        </Button>
        <Tooltip
          side="top"
          delay={10000}
          triggerContent={
            <Button variant="primary" size="sm" onClick={onNext}>
              답장하기
            </Button>
          }
        >
          사라지기전에 답장을 보내보세요!
        </Tooltip>
      </Navbar>
    </LetterContent>
  );
};

const style = {
  tag: css`
    display: flex;
    gap: 0.5rem;
  `,
  text: css`
    height: 15rem;
    ${textStyles.l1m};
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 3.5rem;
    ${textStyles.c1r};
    color: ${COLORS.gray2};
  `,
  navbar: css`
    padding-inline: 0;
  `,
};

export default ReceivedLetter;
