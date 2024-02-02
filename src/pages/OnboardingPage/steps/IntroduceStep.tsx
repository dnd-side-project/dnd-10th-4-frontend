import Button from '@/components/Button';
import StepTemplate from '../components/StepTemplate';

interface IntroduceStepProps {
  onNext: VoidFunction;
}

const IntroduceStep = ({ onNext }: IntroduceStepProps) => {
  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={onNext}>
          다음
        </Button>
      }
    >
      <h1>이 곳에선 아무에게도 말 못할 나의 이야기를</h1>
    </StepTemplate>
  );
};

export default IntroduceStep;
