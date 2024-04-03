import { Fragment } from 'react';
import { css } from '@emotion/react';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import { Reply } from '@/types/letter';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import TagList from '@/components/TagList';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { formatDate } from '@/utils/dateUtils';
import PolaroidModal from '@/components/PolaroidModal';
import Button from '@/components/Button';
import { getTagList } from '../utils/tagUtills';

interface LetterModalProps extends ReturnType<typeof useBoolean> {
  letter: Reply;
}

const LetterModal = ({ value, off, letter }: LetterModalProps) => {
  return (
    <Modal isOpen={value} close={off}>
      <Header css={style.header}>
        <Header.Left>
          <div css={style.leftHeader}>
            <CaretLeft
              css={style.icon}
              strokeWidth={2.5}
              color="white"
              onClick={off}
            />
            <span css={style.headerText}>보관한 편지</span>
          </div>
        </Header.Left>
      </Header>
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
                <PolaroidModal leftPosition={1.2} img={letter.sendImagePath}>
                  <Button variant="secondary" size="sm">
                    닫기
                  </Button>
                </PolaroidModal>
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
                <PolaroidModal leftPosition={1.2} img={letter.replyImagePath}>
                  <Button variant="secondary" size="sm">
                    닫기
                  </Button>
                </PolaroidModal>
              )}
            </>
          )}
        </LetterCard>
      </div>
    </Modal>
  );
};

export default LetterModal;

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
