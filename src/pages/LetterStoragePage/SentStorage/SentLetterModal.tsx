import { css } from '@emotion/react';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import { type SendLetter } from '@/types/letter';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import TagList from '@/components/TagList';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { formatDate } from '@/utils/dateUtils';
import PolaroidModal from '@/components/PolaroidModal';
import Button from '@/components/Button';
import { getTagList } from '../utils/tagUtills';
import LetterModalHeader from '../components/LetterModalHeader';

interface SentLetterModalProps extends ReturnType<typeof useBoolean> {
  letter: SendLetter;
}

const SentLetterModal = ({ value, off, letter }: SentLetterModalProps) => {
  return (
    <Modal isOpen={value} close={off}>
      <LetterModalHeader
        headerText="내가 보낸 편지"
        copyContent={letter.content}
        letterId={letter.letterId}
        off={off}
      />
      <div css={style.container}>
        <LetterCard css={style.card}>
          <TagList tags={getTagList(letter)} />
          <LetterHeader nickname="낯선 누군가에게" />
          <section css={style.content}>
            <p>{letter.content}</p>
          </section>
          <div css={style.date}>
            <span>{formatDate(new Date(letter.createdAt))}</span>
          </div>
          <LetterHeader
            title="From"
            titlePosition="right"
            nickname={letter.senderNickname}
          />
          {letter.sendImagePath && (
            <PolaroidModal img={letter.sendImagePath}>
              <Button variant="secondary" size="sm">
                닫기
              </Button>
            </PolaroidModal>
          )}
        </LetterCard>
      </div>
    </Modal>
  );
};

export default SentLetterModal;

const style = {
  container: css`
    overflow-y: auto;
    max-height: calc(100svh - 60px);
    padding: 0 1rem;
  `,
  card: css`
    min-height: 26.6rem;
    margin-bottom: 1.8rem;
  `,
  content: css`
    ${textStyles.l1m}
    min-height: 15rem;
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 3.5rem;
    ${textStyles.c1r};
    color: ${COLORS.gray4};
  `,
};
