import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import createFunnel from '@/components/Funnel/createFunnel';
import { ROUTER_PATHS } from '@/router';
import useLetterTag from './hooks/useLetterTag';
import ReceivedLetter from './ReceivedLetter';
import ReplyToLetter from './ReplyToLetter';
import ReceptionHeader from './components/ReceptionHeader';

const { Funnel, Step, useFunnel } = createFunnel([
  'ReceivedLetter',
  'ReplyToLetter',
] as const);

const LetterReceptionPage = () => {
  const { letterId } = useParams();

  /**
   * letterId 가 유효하지 않을때에는?
   * letterId 가 숫자가 아닌 값일 땐 "존재하지 않는 페이지 입니다"? 보여주기?
   */
  const { letter } = useLetterTag(letterId || '1');

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
          <ReceivedLetter
            receptionLetter={letter}
            onNext={() => setStep('ReplyToLetter')}
          />
        </Step>
        <Step name="ReplyToLetter">
          <ReplyToLetter
            receptionLetter={letter}
            onPrev={() => setStep('ReceivedLetter')}
          />
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
