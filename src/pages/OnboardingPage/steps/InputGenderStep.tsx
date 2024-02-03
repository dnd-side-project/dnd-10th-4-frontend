import { css } from '@emotion/react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import { Female, Male } from '@/assets/icons';
import COLORS from '@/constants/colors';
import StepTemplate from '../components/StepTemplate';

const InputGenderStep = () => {
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
        낯선 거북이님의 편지가 잘 전해질 수 있도록
      </p>
      <h3 css={textStyles.t3}>성별을 알려주세요</h3>
      <section css={styles.genderSection}>
        <div css={styles.genderCard}>
          <div css={styles.iconCircle}>
            <Male width={36} height={36} color={COLORS.gray3} />
          </div>
          <p css={textStyles.b4m}>남성</p>
        </div>
        <div css={styles.genderCard}>
          <div css={styles.iconCircle}>
            <Female width={36} height={36} color={COLORS.gray3} />
          </div>
          <p css={textStyles.b4m}>여성</p>
        </div>
      </section>
    </StepTemplate>
  );
};

export default InputGenderStep;

const styles = {
  genderSection: css`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;
    max-width: 15rem;
    margin-top: 1.5625rem;
  `,
  genderCard: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6.25rem;
    border: 1px solid rgb(255 255 255 / 0.3);
    border-radius: 0.75rem;
    background: radial-gradient(
      234.35% 120.74% at 6.21% 10.17%,
      rgb(255 255 255 / 0.56) 0%,
      rgb(255 255 255 / 0.4) 100%
    );
    color: black;
    cursor: pointer;
    user-select: none;
    backdrop-filter: blur(7.5px);
  `,
  iconCircle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid rgb(255 255 255 / 0.3);
    border-radius: 50%;
    backdrop-filter: blur(2px);
  `,
};
