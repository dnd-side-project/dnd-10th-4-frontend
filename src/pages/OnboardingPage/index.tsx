import createFunnel from '@/components/Funnel/createFunnel';
import FirstStep from './steps/FirstStep';
import IntroduceStep from './steps/IntroduceStep';
import InputNicknameStep from './steps/InputNicknameStep';
import ShowNicknameStep from './steps/ShowNicknameStep';
import InputBirthdayStep from './steps/InputBirthdayStep';
import InputGenderStep from './steps/InputGenderStep';
import InputWorryStep from './steps/InputWorryStep';
import FinalStep from './steps/FinalStep';

const { Funnel, Step, useFunnel } = createFunnel([
  'First',
  'Introduce',
  'Input_Nickname',
  'Show_Nickname',
  'Input_Birthday',
  'Input_Gender',
  'Input_Worry',
  'Final',
] as const);

const OnboardingPage = () => {
  const { step, setStep } = useFunnel();

  return (
    <Funnel step={step}>
      <Step name="First">
        <FirstStep onNext={() => setStep('Introduce')} />
      </Step>
      <Step name="Introduce">
        <IntroduceStep onNext={() => setStep('Input_Nickname')} />
      </Step>
      <Step name="Input_Nickname">
        <InputNicknameStep onNext={() => setStep('Show_Nickname')} />
      </Step>
      <Step name="Show_Nickname">
        <ShowNicknameStep onNext={() => setStep('Input_Birthday')} />
      </Step>
      <Step name="Input_Birthday">
        <InputBirthdayStep onNext={() => setStep('Input_Gender')} />
      </Step>
      <Step name="Input_Gender">
        <InputGenderStep onNext={() => setStep('Input_Worry')} />
      </Step>
      <Step name="Input_Worry">
        <InputWorryStep onNext={() => setStep('Final')} />
      </Step>
      <Step name="Final">
        <FinalStep onNext={() => setStep('First')} />
      </Step>
    </Funnel>
  );
};

export default OnboardingPage;
