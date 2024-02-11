import { useNavigate, useParams } from 'react-router-dom';
import { ROUTER_PATHS } from '@/router';
import createFunnel from '@/components/Funnel/createFunnel';
import useLetterTag from './hooks/useLetterTag';
import ReceivedLetter from './ReceivedLetter';
import ReplyToLetter from './ReplyToLetter';
import ReceptionHeader from './components/ReceptionHeader';
import style from './styles';

const { Funnel, Step, useFunnel } = createFunnel([
  'ReceivedLetter',
  'ReplyToLetter',
] as const);

const LetterReceptionPage = () => {
  const navigate = useNavigate();
  const { letterId } = useParams();

  const { letter } = useLetterTag(Number(letterId));

  const { step, setStep, toPrev } = useFunnel();

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

export default LetterReceptionPage;
