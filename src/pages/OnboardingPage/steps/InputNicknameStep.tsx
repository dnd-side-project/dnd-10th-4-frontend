import { useFormContext, useWatch } from 'react-hook-form';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import { Shuffle } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import { getRandomItem } from '@/utils/arrayUtils';
import { NICKNAMES } from '@/constants/users';
import onboardingStyles from '../styles';
import StepTemplate from '../components/StepTemplate';
import { Inputs } from '../hooks/useOnboardingForm';

const InputNicknameStep = () => {
  const { setValue, control } = useFormContext<Inputs>();
  const { nickname } = useWatch({ control });

  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          선택 완료
        </Button>
      }
    >
      <h3 css={[textStyles.t2, css({ marginBottom: '1.25rem' })]}>
        바다에게 당신의 이름을 알려주세요
      </h3>
      <div css={[onboardingStyles.input, styles.input]}>
        <span>낯선 </span>
        <span css={css({ color: COLORS.gray3 })}>{nickname}</span>
        <IconButton
          type="button"
          css={styles.icon}
          variant="header"
          onClick={() => setValue('nickname', getRandomItem(NICKNAMES))}
        >
          <Shuffle />
        </IconButton>
      </div>
    </StepTemplate>
  );
};

export default InputNicknameStep;

const styles = {
  input: css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 15.3rem;
  `,
  icon: css`
    position: absolute;
    top: 50%;
    right: 0.375rem;
    transform: translateY(-50%);

    &:active {
      transform: translateY(-50%);
    }
  `,
};
