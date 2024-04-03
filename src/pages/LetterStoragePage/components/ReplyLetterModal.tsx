import { Fragment } from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import { Reply } from '@/types/letter';
import Header from '@/components/Header';
import { CaretLeft, TrashCan, Copy } from '@/assets/icons';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import TagList from '@/components/TagList';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { formatDate } from '@/utils/dateUtils';
import PolaroidModal from '@/components/PolaroidModal';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { getTagList } from '../utils/tagUtills';
import DeleteBottomSheet from './DeleteBottomSheet';

interface ReplyLetterModalProps extends ReturnType<typeof useBoolean> {
  letter: Reply;
}

const ReplyLetterModal = ({ value, off, letter }: ReplyLetterModalProps) => {
  const deleteBottomSheetProps = useBoolean(false);

  const handleContentCopy = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast.success('편지가 복사되었어요.', {
          autoClose: 1500,
          position: 'bottom-center',
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error('편지 복사를 실패했어요', {
          autoClose: 1500,
          position: 'bottom-center',
        });
      });
  };

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
        <Header.Right>
          <div css={style.rightHeader}>
            <IconButton
              onClick={() => {
                handleContentCopy(
                  letter.letterType !== 'Onboarding'
                    ? letter.repliedContent
                    : letter.content,
                );
              }}
            >
              <Copy stroke="white" />
            </IconButton>
            <IconButton onClick={deleteBottomSheetProps.on}>
              <TrashCan fill="white" />
            </IconButton>
          </div>
        </Header.Right>
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
      <DeleteBottomSheet
        letterId={letter.letterId}
        modalOff={off}
        {...deleteBottomSheetProps}
      />
    </Modal>
  );
};

export default ReplyLetterModal;

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
  rightHeader: css`
    display: flex;
    gap: 0.625rem;
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
