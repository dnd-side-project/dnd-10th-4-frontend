import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import StepTemplate from '../components/StepTemplate';

const FirstStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          다음
        </Button>
      }
    >
      <h3 css={textStyles.t1}>환영해요</h3>
    </StepTemplate>
  );
};

export default FirstStep;
