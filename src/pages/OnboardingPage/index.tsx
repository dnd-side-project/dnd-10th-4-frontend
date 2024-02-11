import React, { useState } from 'react';
import {
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import createFunnel from '@/components/Funnel/createFunnel';
import { FunnelProvider } from '@/contexts/useFunnelContext';
import Header from '@/components/Header';
import MusicButton from '@/components/MusicButton';
import { ROUTER_PATHS } from '@/router';
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
import useOnboardingForm, { Inputs } from './hooks/useOnboardingForm';

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
  const navigate = useNavigate();

  const [progress, setProgress] = useState<
    React.ComponentProps<typeof NavHeader>
  >({
    progressValue: 0,
    showBackButton: false,
    showSkipButton: false,
  });

  const form = useOnboardingForm();
  const { trigger, handleSubmit } = form;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    alert('온보딩 성공! 🎉 곧 API 연동 작업 예정입니다');
    // TODO: 서버에 mutation 요청 보내고, 성공하면 navigate(ROUTER_PATHS.ROOT) 해야 합니다.
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => {
    console.error(errors);
    navigate(ROUTER_PATHS.ROOT);
  };

  return (
    <FunnelProvider value={{ toPrev, toNext, toFirst, toLast }}>
      <form css={styles.container} onSubmit={handleSubmit(onSubmit, onError)}>
        <NavHeader {...progress} />
        <Header rightContent={<MusicButton />} />

        <FormProvider {...form}>
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
              onEnter={() => {
                setProgress({
                  progressValue: 2,
                  showBackButton: true,
                  showSkipButton: true,
                });
                trigger('birthday');
              }}
            >
              <InputBirthdayStep />
            </Step>
            <Step
              name="Input_Gender"
              onEnter={() => {
                setProgress({
                  progressValue: 3,
                  showBackButton: true,
                  showSkipButton: true,
                });
                trigger('gender');
              }}
            >
              <InputGenderStep />
            </Step>
            <Step
              name="Input_Worry"
              onEnter={() => {
                setProgress({
                  progressValue: 4,
                  showBackButton: true,
                  showSkipButton: true,
                });
                trigger('worries');
              }}
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
        </FormProvider>
      </form>
    </FunnelProvider>
  );
};

export default OnboardingPage;
