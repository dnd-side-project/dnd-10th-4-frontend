import Button from '@/components/Button';
import StepTemplate from '../components/StepTemplate';

interface InputGenderStepProps {
  onNext: VoidFunction;
}

const InputGenderStep = ({ onNext }: InputGenderStepProps) => {
  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={onNext}>
          선택 완료
        </Button>
      }
    >
      <h1>성별을 알려주세요</h1>
    </StepTemplate>
  );
};

export default InputGenderStep;
