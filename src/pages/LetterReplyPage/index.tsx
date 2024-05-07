import { useParams } from 'react-router-dom';
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
    </UnknownErrorBoundary>
  );
};

export default LetterReplyPage;
