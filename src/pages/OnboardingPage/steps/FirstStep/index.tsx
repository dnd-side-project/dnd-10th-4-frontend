import { useWatch } from 'react-hook-form';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import useBoolean from '@/hooks/useBoolean';
import StepTemplate from '../../components/StepTemplate';
import { Inputs } from '../../hooks/useOnboardingForm';
import TermsBottomSheet from './TermsBottomSheet';

const FirstStep = () => {
  const { toNext } = useFunnelContext();
  const { terms } = useWatch<Inputs>();
  const termsBottomSheetProps = useBoolean(true);

  const handleClickNextButton = () => {
    if (terms?.serviceTerm) {
      toNext();
    } else {
      termsBottomSheetProps.on();
    }
  };

  return (
    <>
      <TermsBottomSheet {...termsBottomSheetProps} />
      <StepTemplate
        buttonContent={
          <Button variant="primary" onClick={handleClickNextButton}>
            다음
          </Button>
        }
      >
        <h3 css={textStyles.t1}>환영해요</h3>
      </StepTemplate>
    </>
  );
};

export default FirstStep;
