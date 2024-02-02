import Button from '@/components/Button';
import StepTemplate from '../components/StepTemplate';

interface FinalStepProps {
  onNext: VoidFunction;
}

const FinalStep = ({ onNext }: FinalStepProps) => {
  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={onNext}>
          시작하기
        </Button>
      }
    >
      <h1>프로필이 완성됐어요</h1>
    </StepTemplate>
  );
};

export default FinalStep;
