import { type FallbackProps } from 'react-error-boundary';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import * as Sentry from '@sentry/react';
import ERROR_RESPONSES from '@/constants/errorMessages';
import ErrorImage from '@/assets/images/error.svg';
import { ROUTER_PATHS } from '@/router';
import Button from '../../Button';
import styles from './styles';

const RootUnknownFallback = ({ error }: FallbackProps) => {
  const navigate = useNavigate();

  const shouldSkip =
    isAxiosError(error) &&
    (error.response?.data === ERROR_RESPONSES.reissueFailed ||
      error.response?.data === ERROR_RESPONSES.authenticationEntryPoint);

  useEffect(() => {
    if (shouldSkip) {
      return;
    }

    const scope = Sentry.getCurrentScope();
    scope.setTag('type', 'unknown');

    Sentry.captureException(error);
  }, []);

  if (shouldSkip) {
    return <Navigate to={ROUTER_PATHS.SIGNIN} />;
  }

  return (
    <main css={styles.container}>
      <img css={styles.image} src={ErrorImage} alt="오류" />
      <h2 css={styles.title}>문제가 발생했어요</h2>
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

export default RootUnknownFallback;
