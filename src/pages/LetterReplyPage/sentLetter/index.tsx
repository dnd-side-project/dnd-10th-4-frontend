import { CaretRight, CaretLeft } from '@/assets/icons';
import COLORS from '@/constants/colors';
import useBoolean from '@/hooks/useBoolean';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import LetterCard from '@/components/LetterCard';
import PolaroidModal from '@/components/PolaroidModal';
import TagList from '@/pages/LetterReceptionPage/components/TagList';
import Button from '@/components/Button';
import LetterContent from '../components/LetterContent';
import useLetterReplyWithTag from '../hooks/useLetterReplyWithTag';
import style from './styles';
interface SentLetterProps {
  letterId: number;
}

const SentLetter = ({ letterId }: SentLetterProps) => {
  const { value: isOpen, on: open, off: close } = useBoolean(false);

  const { replyLetter } = useLetterReplyWithTag(letterId);

  return (
    <>
      <div css={style.container} onClick={open}>
        <span css={style.text}>내가 보낸 편지</span>
        <CaretRight stroke={COLORS.gray4} width={24} height={24} />
      </div>
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
            <TagList tags={replyLetter.tagList} />
            <LetterContent
              receiver={replyLetter.senderNickname}
              content={replyLetter.content}
              date="24년 02월 13일"
              sender={replyLetter.receiverNickname}
            />
            <PolaroidModal
              topPosition={4.5}
              leftPosition={1.2}
              img="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
            >
              <Button variant="secondary" size="sm">
                닫기
              </Button>
            </PolaroidModal>
          </LetterCard>
        </div>
      </Modal>
    </>
  );
};

export default SentLetter;
