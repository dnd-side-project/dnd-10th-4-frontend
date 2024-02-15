import { type FallbackProps } from 'react-error-boundary';
import { useEffect } from 'react';
import { isAxiosError } from 'axios';
import * as Sentry from '@sentry/react';
import ERROR_RESPONSES from '@/constants/errorMessages';
import Button from '../../Button';
import styles from '../styles';

const ApiFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const shouldSkip =
    !isAxiosError(error) ||
    error.response?.data === ERROR_RESPONSES.accessExpired ||
    error.response?.data === ERROR_RESPONSES.reissueFailed;

  useEffect(() => {
    if (shouldSkip) {
      return;
    }

    console.log('ApiFallback useEffect');

    const scope = Sentry.getCurrentScope();
    scope.setTag('type', 'api');

    scope.setContext('API Request Detail', {
      method: error.config?.method,
      url: error.config?.url,
      params: error.config?.params,
      data: error.config?.data,
      headers: error.config?.headers,
    });

    Sentry.setContext('API Response Detail', {
      status: error.response?.status,
      data: error.response?.data,
    });

    Sentry.captureException(error);
  }, []);

  if (shouldSkip) {
    throw error;
  }

  return (
    <main css={styles.container}>
      <div css={styles.skeletonImg} />
      <h2 css={styles.title}>네트워크 오류 발생</h2>
      <h2 css={styles.description}>{error.response?.data ?? error.message}</h2>
      <Button
        css={styles.button}
        variant="primary"
        size="sm"
        type="button"
        onClick={resetErrorBoundary}
      >
        재시도
      </Button>
    </main>
  );
};

export default ApiFallback;
