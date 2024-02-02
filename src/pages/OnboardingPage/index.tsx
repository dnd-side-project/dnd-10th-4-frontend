import createFunnel from '@/components/Funnel/createFunnel';
import { FunnelProvider } from '@/contexts/useFunnelContext';
import FirstStep from './steps/FirstStep';
import IntroduceStep from './steps/IntroduceStep';
import InputNicknameStep from './steps/InputNicknameStep';
import ShowNicknameStep from './steps/ShowNicknameStep';
import InputBirthdayStep from './steps/InputBirthdayStep';
import InputGenderStep from './steps/InputGenderStep';
import InputWorryStep from './steps/InputWorryStep';
import LastStep from './steps/LastStep';

const { Funnel, Step, useFunnel } = createFunnel([
  'First',
  'Introduce',
  'Input_Nickname',
  'Show_Nickname',
  'Input_Birthday',
  'Input_Gender',
  'Input_Worry',
  'Last',
] as const);

const OnboardingPage = () => {
  const { step, setStep, toPrev, toNext, toLast } = useFunnel();

  return (
    <FunnelProvider value={{ toPrev, toNext, toLast }}>
      <Funnel step={step}>
        <Step name="First">
          <FirstStep />
        </Step>
        <Step name="Introduce">
          <IntroduceStep />
        </Step>
        <Step name="Input_Nickname">
          <InputNicknameStep />
        </Step>
        <Step name="Show_Nickname">
          <ShowNicknameStep />
        </Step>
        <Step name="Input_Birthday">
          <InputBirthdayStep />
        </Step>
        <Step name="Input_Gender">
          <InputGenderStep />
        </Step>
        <Step name="Input_Worry">
          <InputWorryStep />
        </Step>
        <Step name="Last">
          {/* TODO: 임시로 첫 스텝으로 이동시킴 */}
          <LastStep onNext={() => setStep('First')} />
        </Step>
      </Funnel>
    </FunnelProvider>
  );
};

export default OnboardingPage;
