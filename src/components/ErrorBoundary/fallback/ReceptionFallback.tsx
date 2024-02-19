import { type FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import ERROR_RESPONSES from '@/constants/errorMessages';
import Button from '../../Button';
import styles from './styles';

const ReceptionFallback = ({ error }: FallbackProps) => {
  const navigate = useNavigate();

  const shouldSkip = !(
    isAxiosError(error) &&
    error.response?.data === ERROR_RESPONSES.accessDeniedLetter
  );

  if (shouldSkip) {
    throw error;
  }

  return (
    <main css={styles.container}>
      <div css={styles.skeletonImg} />
      <h2 css={styles.title}>접근 금지</h2>
      <h2 css={styles.description}>{error.response?.data ?? error.message}</h2>
      <Button
        css={styles.button}
        variant="primary"
        size="sm"
        type="button"
        onClick={() => navigate(-1)}
      >
        이전 페이지로 돌아가기
      </Button>
    </main>
  );
};

export default ReceptionFallback;
