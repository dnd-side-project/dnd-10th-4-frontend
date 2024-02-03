import { css } from '@emotion/react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import StepTemplate from '../components/StepTemplate';
import onboardingStyles from '../styles';

const InputBirthdayStep = () => {
  const { toNext } = useFunnelContext();

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={toNext}>
          선택 완료
        </Button>
      }
    >
      <p css={[textStyles.b4m, css({ marginBottom: '0.25rem' })]}>
        낯선거북이님의 편지가 잘 전해질 수 있도록
      </p>
      <h3 css={[textStyles.t3, css({ marginBottom: '1.5625rem' })]}>
        생년월일을 알려주세요
      </h3>
      <section css={styles.inputSection}>
        <input
          css={[onboardingStyles.input, styles.input('0.9')]}
          type="text"
          placeholder="YYYY"
        />
        <input
          css={[onboardingStyles.input, styles.input('1')]}
          type="text"
          placeholder="MM"
        />
        <input
          css={[onboardingStyles.input, styles.input('1')]}
          type="text"
          placeholder="DD"
        />
      </section>
    </StepTemplate>
  );
};

export default InputBirthdayStep;

const styles = {
  inputSection: css`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    max-width: 16.25rem;
  `,
  input: (shrink: string) => css`
    flex-shrink: ${shrink};
    width: 100%;
  `,
};
