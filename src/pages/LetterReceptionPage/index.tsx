import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import LoadingSpinner from '@/components/LoadingSpinner';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnknownErrorBoundary';
import LetterAccessFallback from '@/components/ErrorBoundary/fallback/LetterAccessFallback';
import letterOptions from '@/api/letter/queryOptions';
import style from './styles';
import NormalReception from './NormalReception';

const SuspensedPage = () => {
  const { letterId } = useParams();

  const { data: letter } = useSuspenseQuery(
    letterOptions.singleReception(Number(letterId)),
  );

  if (letter.letterType === 'Onboarding') {
    return <div>온보딩 고고</div>;
  } else {
    return <NormalReception />;
  }
};

const LetterReceptionPage = () => {
  return (
    <UnknownErrorBoundary FallbackComponent={LetterAccessFallback}>
      <Suspense
        fallback={
          <div css={style.loadingSpinner}>
            <LoadingSpinner size="4rem" />
            <p>흘러온 편지 가져오는 중...</p>
          </div>
        }
      >
        <SuspensedPage />
      </Suspense>
    </UnknownErrorBoundary>
  );
};

export default LetterReceptionPage;
