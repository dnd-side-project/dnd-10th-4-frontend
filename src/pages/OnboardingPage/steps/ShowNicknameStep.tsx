import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import StepTemplate from '../components/StepTemplate';

const ShowNicknameStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          다음
        </Button>
      }
    >
      <h1>반가워요, 낯선 거북이님.</h1>
    </StepTemplate>
  );
};

export default ShowNicknameStep;
