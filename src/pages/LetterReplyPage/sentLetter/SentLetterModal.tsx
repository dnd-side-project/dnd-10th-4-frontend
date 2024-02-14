import { css } from '@emotion/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import LetterCard from '@/components/LetterCard';
import PolaroidModal from '@/components/PolaroidModal';
import { CaretLeft } from '@/assets/icons';
import letterOptions from '@/api/letter/queryOptions';
import LetterContent from '../components/LetterContent';

interface SentLetterModalProps {
  isOpen: boolean;
  close: () => void;
  letterId: number;
}

const SentLetterModal = ({ isOpen, close, letterId }: SentLetterModalProps) => {
  const { data } = useSuspenseQuery({
    ...letterOptions.singleReply(letterId),
  });

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
            receiver={data.senderNickname}
            content={data.content}
            date="24년 02월 13일"
            sender={data.receiverNickname}
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
