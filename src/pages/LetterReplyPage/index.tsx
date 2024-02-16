import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';
import ReplyHeader from './components/ReplyHeader';
import SentLetter from './sentLetter';
import ReplyLetter from './replyLetter';
import BottomButton from './components/BottomButton';
import style from './styles';

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
