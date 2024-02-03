import { css } from '@emotion/react';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import Chip from '@/components/Chip';
import StepTemplate from '../components/StepTemplate';

const InputWorryStep = () => {
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
        비슷한 고민을 가진 사람과 연결될 수 있도록
      </p>
      <h3 css={[textStyles.t3, css({ marginBottom: '0.8125rem' })]}>
        고민을 알려주세요
      </h3>
      <p css={[textStyles.c1m, css({ marginBottom: '1.5rem' })]}>
        3개 까지 선택 할 수 있어요
      </p>
      <section css={styles.chipSection}>
        <Chip css={styles.chip} variant="primary-selected">
          일·직장
        </Chip>
        <Chip css={styles.chip} variant="primary-disabled">
          취업·진로
        </Chip>
        <Chip css={styles.chip} variant="primary">
          인간관계
        </Chip>
        <Chip css={styles.chip} variant="primary">
          이별·상실
        </Chip>
        <Chip css={styles.chip} variant="primary">
          연애
        </Chip>
        <Chip css={styles.chip} variant="primary">
          학업
        </Chip>
        <Chip css={styles.chip} variant="primary">
          가족
        </Chip>
        <Chip css={styles.chip} variant="primary">
          기타
        </Chip>
      </section>
    </StepTemplate>
  );
};

export default InputWorryStep;

const styles = {
  chipSection: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4375rem;
    justify-content: center;
    width: 20rem;
  `,
  chip: css`
    margin-bottom: 0.875rem;
  `,
};
