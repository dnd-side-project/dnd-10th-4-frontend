import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import StepTemplate from '../components/StepTemplate';
import NavHeader from '../components/NavHeader';

const InputGenderStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      navHeaderContent={
        <NavHeader progressValue={3} showBackButton showSkipButton />
      }
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          선택 완료
        </Button>
      }
    >
      <h1>성별을 알려주세요</h1>
    </StepTemplate>
  );
};

export default InputGenderStep;
