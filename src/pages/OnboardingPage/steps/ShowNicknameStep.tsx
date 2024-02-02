import Button from '@/components/Button';
import StepTemplate from '../components/StepTemplate';

interface ShowNicknameStepProps {
  onNext: VoidFunction;
}

const ShowNicknameStep = ({ onNext }: ShowNicknameStepProps) => {
  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={onNext}>
          다음
        </Button>
      }
    >
      <h1>반가워요, 낯선 거북이님.</h1>
    </StepTemplate>
  );
};

export default ShowNicknameStep;
