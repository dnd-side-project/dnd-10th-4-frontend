import styles from './styles';

interface LoadingSpinnerProps {
  /** 스피너의 너비 높이 */
  size?: string;
  /** 스피너의 굵기 */
  weight?: string;
  /** 스피너의 색상 */
  color?: string;
}

/** 둥글게 돌아가는 로딩 UI 스피너입니다. */
const LoadingSpinner = ({
  size = '1rem',
  weight = '2px',
  color = 'currentColor',
}: LoadingSpinnerProps) => {
  return <div css={styles.spinner(size, weight, color)} />;
};

export default LoadingSpinner;
export { default as loadingSpinnerStyles } from './styles';
