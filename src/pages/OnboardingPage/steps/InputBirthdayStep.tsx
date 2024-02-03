import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import StepTemplate from '../components/StepTemplate';

const InputBirthdayStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      navHeaderProps={{
        progressValue: 2,
        showBackButton: true,
        showSkipButton: true,
      }}
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          선택 완료
        </Button>
      }
    >
      <h1>생년월일을 알려주세요</h1>
    </StepTemplate>
  );
};

export default InputBirthdayStep;
