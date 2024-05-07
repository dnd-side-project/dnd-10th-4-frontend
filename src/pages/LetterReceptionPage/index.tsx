import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnknownErrorBoundary';
import LetterAccessFallback from '@/components/ErrorBoundary/fallback/LetterAccessFallback';
import letterOptions from '@/api/letter/queryOptions';
import OnboardingReception from './OnboardingReception';
import NormalReception from './NormalReception';

const SuspensedPage = () => {
  const { letterId } = useParams();

  const { data: letter } = useSuspenseQuery(
    letterOptions.singleReception(Number(letterId)),
  );

  if (letter.letterType === 'Onboarding') {
    return <OnboardingReception />;
  } else {
    return <NormalReception />;
  }
};

const LetterReceptionPage = () => {
  return (
    <UnknownErrorBoundary FallbackComponent={LetterAccessFallback}>
      <SuspensedPage />
    </UnknownErrorBoundary>
  );
};

export default LetterReceptionPage;
