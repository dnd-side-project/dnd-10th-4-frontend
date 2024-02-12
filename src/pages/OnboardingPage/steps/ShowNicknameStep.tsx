import { useFormContext, useWatch } from 'react-hook-form';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import StepTemplate from '../components/StepTemplate';
import { Inputs } from '../hooks/useOnboardingForm';

const ShowNicknameStep = () => {
  const { control } = useFormContext<Inputs>();
  const { nickname } = useWatch({ control });

  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          다음
        </Button>
      }
    >
      <h1>반가워요, 낯선 {nickname}님.</h1>
    </StepTemplate>
  );
};

export default ShowNicknameStep;
