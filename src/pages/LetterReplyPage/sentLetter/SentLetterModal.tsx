import { css } from '@emotion/react';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import PolaroidModal from '@/components/PolaroidModal';
import { CaretLeft } from '@/assets/icons';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

interface SentLetterModalProps {
  isOpen: boolean;
  close: () => void;
}

const SentLetterModal = ({ isOpen, close }: SentLetterModalProps) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <Header
        css={style.header}
        leftContent={
          <div css={style.leftHeader}>
            <CaretLeft
              css={style.icon}
              strokeWidth={2.5}
              color="white"
              onClick={close}
            />
            <span css={style.headerText}>내가 보낸 편지</span>
          </div>
        }
      />
      <div css={style.content}>
        <LetterCard isOpen={true}>
          <LetterHeader nickname="낯선 고양이" />
          <p css={style.letter}>
            여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을
            거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다
            남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴
            그대 침묵을 이별로 받아두겠소
          </p>
          <div css={style.date}>24년 02월 13일</div>
          <LetterHeader
            title="From"
            titlePosition="right"
            nickname="낯선 강아지"
          />
          <PolaroidModal
            topPosition={4.5}
            leftPosition={1.2}
            img="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
          />
        </LetterCard>
      </div>
    </Modal>
  );
};

export default SentLetterModal;

const style = {
  header: css`
    height: 2.5rem;
    margin-bottom: 0.5rem;
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
  `,
  leftHeader: css`
    display: flex;
    gap: 0.625rem;
    align-items: center;
  `,
  icon: css`
    cursor: pointer;
  `,
  headerText: css`
    color: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
  `,
  content: css`
    padding-inline: 1rem;
  `,
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
