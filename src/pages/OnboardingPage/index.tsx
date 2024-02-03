import React, { useState } from 'react';
import createFunnel from '@/components/Funnel/createFunnel';
import { FunnelProvider } from '@/contexts/useFunnelContext';
import Header from '@/components/Header';
import MusicButton from '@/components/MusicButton';
import FirstStep from './steps/FirstStep';
import IntroduceStep from './steps/IntroduceStep';
import InputNicknameStep from './steps/InputNicknameStep';
import ShowNicknameStep from './steps/ShowNicknameStep';
import InputBirthdayStep from './steps/InputBirthdayStep';
import InputGenderStep from './steps/InputGenderStep';
import InputWorryStep from './steps/InputWorryStep';
import LastStep from './steps/LastStep';
import NavHeader from './components/NavHeader';
import styles from './styles';

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
  const { step, toPrev, toNext, toFirst, toLast } = useFunnel();

  const [progress, setProgress] = useState<
    React.ComponentProps<typeof NavHeader>
  >({
    progressValue: 0,
    showBackButton: false,
    showSkipButton: false,
  });

  return (
    <FunnelProvider value={{ toPrev, toNext, toFirst, toLast }}>
      <div css={styles.container}>
        <NavHeader {...progress} />
        <Header rightContent={<MusicButton />} />
        <Funnel step={step}>
          <Step
            name="First"
            onEnter={() =>
              setProgress({
                progressValue: 0,
                showBackButton: false,
                showSkipButton: false,
              })
            }
          >
            <FirstStep />
          </Step>
          <Step name="Introduce">
            <IntroduceStep />
          </Step>
          <Step
            name="Input_Nickname"
            onEnter={() =>
              setProgress({
                progressValue: 1,
                showBackButton: true,
                showSkipButton: false,
              })
            }
          >
            <InputNicknameStep />
          </Step>
          <Step name="Show_Nickname">
            <ShowNicknameStep />
          </Step>
          <Step
            name="Input_Birthday"
            onEnter={() =>
              setProgress({
                progressValue: 2,
                showBackButton: true,
                showSkipButton: true,
              })
            }
          >
            <InputBirthdayStep />
          </Step>
          <Step
            name="Input_Gender"
            onEnter={() =>
              setProgress({
                progressValue: 3,
                showBackButton: true,
                showSkipButton: true,
              })
            }
          >
            <InputGenderStep />
          </Step>
          <Step
            name="Input_Worry"
            onEnter={() =>
              setProgress({
                progressValue: 4,
                showBackButton: true,
                showSkipButton: true,
              })
            }
          >
            <InputWorryStep />
          </Step>
          <Step
            name="Last"
            onEnter={() =>
              setProgress({
                progressValue: 0,
                showBackButton: true,
                showSkipButton: false,
              })
            }
          >
            <LastStep />
          </Step>
        </Funnel>
      </div>
    </FunnelProvider>
  );
};

export default OnboardingPage;
