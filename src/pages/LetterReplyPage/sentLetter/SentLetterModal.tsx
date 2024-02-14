import { css } from '@emotion/react';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import LetterCard from '@/components/LetterCard';
import PolaroidModal from '@/components/PolaroidModal';
import { CaretLeft } from '@/assets/icons';
import LetterContent from '../components/LetterContent';

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
          <LetterContent
            receiver="낯선 강아지"
            content="여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여"
            date="24년 02월 13일"
            sender="낯선 고양이"
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
};
