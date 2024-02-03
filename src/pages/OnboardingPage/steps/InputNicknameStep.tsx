import { css } from '@emotion/react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import { Shuffle } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import StepTemplate from '../components/StepTemplate';
import onboardingStyles from '../styles';

const InputNicknameStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      navHeaderProps={{
        progressValue: 1,
        showBackButton: true,
      }}
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          다음
        </Button>
      }
    >
      <h3 css={[textStyles.t4, css({ marginBottom: '1.4375rem' })]}>
        바다에게 당신의 이름을 알려주세요
      </h3>
      <div css={[onboardingStyles.input, styles.input]}>
        <span>낯선</span>
        <span css={css({ color: COLORS.gray3 })}> 거북이</span>
        <IconButton variant="header" css={styles.icon}>
          <Shuffle />
        </IconButton>
      </div>
    </StepTemplate>
  );
};

export default InputNicknameStep;

const styles = {
  input: css`
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
