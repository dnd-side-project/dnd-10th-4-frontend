import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import StepTemplate from '../components/StepTemplate';

const IntroduceStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          다음
        </Button>
      }
    >
      <h3 css={textStyles.t3}>
        <p>이 곳에선 아무에게도 말 못할 나의 이야기를</p>
        <p>바다에 흘려 보낼 수 있어요.</p>
      </h3>
    </StepTemplate>
  );
};

export default IntroduceStep;
