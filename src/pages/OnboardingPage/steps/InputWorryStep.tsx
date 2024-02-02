import Button from '@/components/Button';
import StepTemplate from '../components/StepTemplate';

interface InputWorryStepProps {
  onNext: VoidFunction;
}

const InputWorryStep = ({ onNext }: InputWorryStepProps) => {
  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={onNext}>
          선택 완료
        </Button>
      }
    >
      <h1>고민을 알려주세요</h1>
    </StepTemplate>
  );
};

export default InputWorryStep;
