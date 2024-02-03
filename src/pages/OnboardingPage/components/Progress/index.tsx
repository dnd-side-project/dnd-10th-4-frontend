import * as P from '@radix-ui/react-progress';
import textStyles from '@/styles/textStyles';
import styles from './styles';

interface ProgressProps {
  /** value의 최대 값 (비율을 계산하기 위함) */
  max: number;
  /** 현재 값 */
  value: number;
  /** 진척도 바의 너비 */
  width?: string;
  /** 진척도 바의 높이 */
  height?: string;
}

/** 진척도를 표시하는 컴포넌트입니다. */
const Progress = ({
  max,
  value,
  width = '4.875rem',
  height = '0.5rem',
}: ProgressProps) => {
  return (
    <div css={styles.container(width, height)}>
      <P.Root css={styles.progress} value={value}>
        <P.Indicator
          css={styles.indicator}
          style={{ transform: `translateX(-${100 - (value / max) * 100}%)` }}
        />
      </P.Root>
      <p css={[styles.label(height), textStyles.c1r]}>
        {value}/{max}
      </p>
    </div>
  );
};

export default Progress;
