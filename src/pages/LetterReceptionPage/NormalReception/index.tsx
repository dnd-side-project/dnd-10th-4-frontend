import { useNavigate, useParams } from 'react-router-dom';
import createFunnel from '@/components/Funnel/createFunnel';
import { ROUTER_PATHS } from '@/router';
import ReceivedLetter from './ReceivedLetter';
import ReplyToLetter from './ReplyToLetter';
import ReceptionHeader from './components/ReceptionHeader';
import style from './styles';

const { Funnel, Step, useFunnel } = createFunnel([
  'ReceivedLetter',
  'ReplyToLetter',
] as const);

const NormalReception = () => {
  const navigate = useNavigate();
  const { step, setStep, toPrev } = useFunnel();
  const { letterId } = useParams();

  return (
    <div css={style.container}>
      <ReceptionHeader
        onClickPrev={
          step === 'ReceivedLetter' ? () => navigate(ROUTER_PATHS.ROOT) : toPrev
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
  );
};

export default NormalReception;
