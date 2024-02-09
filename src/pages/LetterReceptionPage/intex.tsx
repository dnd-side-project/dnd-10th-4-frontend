import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import createFunnel from '@/components/Funnel/createFunnel';
import { ROUTER_PATHS } from '@/router';
import ReceivedLetter from './ReceivedLetter';
import ReplyToLetter from './ReplyToLetter';
import ReceptionHeader from './components/ReceptionHeader';

const { Funnel, Step, useFunnel } = createFunnel([
  'ReceivedLetter',
  'ReplyToLetter',
] as const);

const LetterReceptionPage = () => {
  const { step, setStep, toPrev } = useFunnel();
  const navigate = useNavigate();

  return (
    <div css={style.container}>
      <ReceptionHeader
        onClickPrev={
          step === 'ReceivedLetter' ? () => navigate(ROUTER_PATHS.ROOT) : toPrev
        }
      />
      <Funnel step={step}>
        <Step name="ReceivedLetter">
          <ReceivedLetter onNext={() => setStep('ReplyToLetter')} />
        </Step>
        <Step name="ReplyToLetter">
          <ReplyToLetter onPrev={() => setStep('ReceivedLetter')} />
        </Step>
      </Funnel>
    </div>
  );
};

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
};

export default LetterReceptionPage;
