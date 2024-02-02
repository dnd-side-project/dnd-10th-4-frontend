import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import StepTemplate from '../components/StepTemplate';

const IntroduceStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          다음
        </Button>
      }
    >
      <h1>이 곳에선 아무에게도 말 못할 나의 이야기를</h1>
    </StepTemplate>
  );
};

export default IntroduceStep;
