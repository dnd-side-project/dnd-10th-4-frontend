import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnknownErrorBoundary';
import LetterAccessFallback from '@/components/ErrorBoundary/fallback/LetterAccessFallback';
import ReplyHeader from './components/ReplyHeader';
import SentLetter from './sentLetter';
import ReplyLetter from './replyLetter';
import BottomButton from './components/BottomButton';
import style from './styles';

const LetterReplyPage = () => {
  const { letterId } = useParams();

  return (
    <UnknownErrorBoundary FallbackComponent={LetterAccessFallback}>
      <Suspense
        fallback={
          <div css={style.loadingSpinner}>
            <LoadingSpinner size="4rem" />
            <p>답장 받은 편지 가져오는 중...</p>
          </div>
        }
      >
        <div css={style.container}>
          <ReplyHeader letterId={Number(letterId)} />
          <div css={style.content}>
            <div css={style.letter}>
              <SentLetter letterId={Number(letterId)} />
              <ReplyLetter letterId={Number(letterId)} />
            </div>
            <BottomButton letterId={Number(letterId)} />
          </div>
        </div>
      </Suspense>
    </UnknownErrorBoundary>
  );
};

export default LetterReplyPage;
