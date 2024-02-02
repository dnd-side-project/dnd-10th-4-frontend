import Button from '@/components/Button';
import StepTemplate from '../components/StepTemplate';

interface InputBirthdayStepProps {
  onNext: VoidFunction;
}

const InputBirthdayStep = ({ onNext }: InputBirthdayStepProps) => {
  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={onNext}>
          선택 완료
        </Button>
      }
    >
      <h1>생년월일을 알려주세요</h1>
    </StepTemplate>
  );
};

export default InputBirthdayStep;
