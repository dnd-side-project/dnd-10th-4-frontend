import { useNavigate, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import createFunnel from '@/components/Funnel/createFunnel';
import { ROUTER_PATHS } from '@/router';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnknownErrorBoundary';
import ReceptionFallback from '@/components/ErrorBoundary/fallback/ReceptionFallback';
import style from './styles';
import ReceptionHeader from './components/ReceptionHeader';
import ReplyToLetter from './ReplyToLetter';
import ReceivedLetter from './ReceivedLetter';

const { Funnel, Step, useFunnel } = createFunnel([
  'ReceivedLetter',
  'ReplyToLetter',
] as const);

const LetterReceptionPage = () => {
  const navigate = useNavigate();
  const { step, setStep, toPrev } = useFunnel();

  const { letterId } = useParams();

  return (
    <UnknownErrorBoundary FallbackComponent={ReceptionFallback}>
      <Suspense fallback={<LoadingSpinner />}>
        <div css={style.container}>
          <ReceptionHeader
            onClickPrev={
              step === 'ReceivedLetter'
                ? () => navigate(ROUTER_PATHS.ROOT)
                : toPrev
            }
            letterId={Number(letterId)}
          />
          <Funnel step={step}>
            <Step name="ReceivedLetter">
              <ReceivedLetter
                letterId={Number(letterId)}
                onNext={() => setStep('ReplyToLetter')}
              />
            </Step>
            <Step name="ReplyToLetter">
              <ReplyToLetter
                letterId={Number(letterId)}
                onPrev={() => setStep('ReceivedLetter')}
              />
            </Step>
          </Funnel>
        </div>
      </Suspense>
    </UnknownErrorBoundary>
  );
};

export default LetterReceptionPage;
