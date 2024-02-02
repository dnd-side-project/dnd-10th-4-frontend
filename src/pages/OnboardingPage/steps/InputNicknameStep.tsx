import Button from '@/components/Button';
import StepTemplate from '../components/StepTemplate';

interface InputNicknameStepProps {
  onNext: VoidFunction;
}

const InputNicknameStep = ({ onNext }: InputNicknameStepProps) => {
  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={onNext}>
          다음
        </Button>
      }
    >
      <h1>닉네임을 알려주세요</h1>
    </StepTemplate>
  );
};

export default InputNicknameStep;
