import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import StepTemplate from '../components/StepTemplate';

const InputWorryStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      navHeaderProps={{
        progressValue: 4,
        showBackButton: true,
        showSkipButton: true,
      }}
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          선택 완료
        </Button>
      }
    >
      <h1>고민을 알려주세요</h1>
    </StepTemplate>
  );
};

export default InputWorryStep;
