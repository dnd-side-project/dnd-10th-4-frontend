import Button from '@/components/Button';
import StepTemplate from '../components/StepTemplate';

interface FirstStepProps {
  onNext: VoidFunction;
}

const FirstStep = ({ onNext }: FirstStepProps) => {
  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={onNext}>
          다음
        </Button>
      }
    >
      <h1>환영해요</h1>
    </StepTemplate>
  );
};

export default FirstStep;
