import { Fragment } from 'react';
import { css } from '@emotion/react';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import { Reply } from '@/types/letter';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import TagList from '@/components/TagList';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { formatDate } from '@/utils/dateUtils';
import { getTagList } from '../utils/tagUtills';
import LetterModalHeader from '../components/LetterModalHeader';
import ReplyPolaroidModal from './ReplyPolaroidModal';

interface ReplyLetterModalProps extends ReturnType<typeof useBoolean> {
  letter: Reply;
}

const ReplyLetterModal = ({ value, off, letter }: ReplyLetterModalProps) => {
  return (
    <Modal isOpen={value} close={off}>
      <LetterModalHeader
        headerText="보관한 편지"
        copyContent={
          letter.letterType === 'Onboarding'
            ? letter.content
            : letter.repliedContent
        }
        letterId={letter.letterId}
        off={off}
        type="reply"
      />
      <div css={style.container}>
        <LetterCard css={style.card(letter.letterType)}>
          {letter.letterType === 'Onboarding' ? (
            <>
              <TagList tags={['첫 편지', '모두에게']} />
              <LetterHeader nickname={'처음 방문한 너에게'} />
              <section css={style.content}>
                {letter.content.split('\n').map((line, i) => (
                  <Fragment key={i}>
                    <p>{line}</p>
                    <br />
                  </Fragment>
                ))}
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
                <ReplyPolaroidModal imagePath={letter.sendImagePath} />
              )}
            </>
          ) : (
            <>
              <TagList tags={getTagList(letter)} />
              <LetterHeader nickname={letter.senderNickname} />
              <section css={style.content}>
                <p>{letter.repliedContent}</p>
              </section>
              <div css={style.date}>
                <span>{formatDate(new Date(letter.repliedAt))}</span>
              </div>
              <LetterHeader
                title="From"
                titlePosition="right"
                nickname={letter.receiverNickname}
              />
              {letter.replyImagePath && (
                <ReplyPolaroidModal imagePath={letter.replyImagePath} />
              )}
            </>
          )}
        </LetterCard>
      </div>
    </Modal>
  );
};

export default ReplyLetterModal;

const style = {
  container: css`
    overflow-y: auto;
    max-height: calc(100svh - 60px);
    padding: 0 1rem;
  `,
  card: (type: string | null) => css`
    min-height: 26.6rem;
    margin-bottom: ${type === 'Onboarding' ? '2.5rem' : '1.8rem'};
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
