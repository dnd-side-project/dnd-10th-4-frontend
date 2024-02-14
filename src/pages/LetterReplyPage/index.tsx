import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import LoadingSpinner from '@/components/LoadingSpinner';
import ReplyHeader from './ReplyHeader';
import SentLetter from './sentLetter';
import ReplyLetter from './replyLetter';
import BottomButton from './components/BottomButton';

const LetterReplyPage = () => {
  const { letterId } = useParams();

  return (
    <div css={style.container}>
      <ReplyHeader />
      <div css={style.content}>
        <Suspense
          fallback={
            <div css={style.loadingSpinner}>
              <LoadingSpinner size="4rem" />
              <p>답장 받은 편지 가져오는 중...</p>
            </div>
          }
        >
          <div css={style.letter}>
            <SentLetter letterId={Number(letterId)} />
            <ReplyLetter letterId={Number(letterId)} />
          </div>
        </Suspense>
        <BottomButton letterId={Number(letterId)} />
      </div>
    </div>
  );
};

export default LetterReplyPage;

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-inline: 1rem;
  `,
  letter: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  loadingSpinner: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  `,
};
