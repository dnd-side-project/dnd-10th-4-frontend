import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { isAxiosError } from 'axios';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ERROR_RESPONSES from '@/constants/errorMessages';
import Button from '../Button';
import styles from './styles';

interface ApiErrorBoundaryProps {
  children?: React.ReactNode;
}

const ApiErrorBoundary = ({ children }: ApiErrorBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const { key } = useLocation();

  return (
    <ErrorBoundary
      onError={(error) => {
        if (!isAxiosError(error)) {
          throw error;
        }

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
      }}
      fallbackRender={({ error, resetErrorBoundary }) => {
        if (!isAxiosError(error)) {
          throw error;
        }

        if (
          error.response?.data === ERROR_RESPONSES.accessExpired ||
          error.response?.data === ERROR_RESPONSES.reissueFailed
        ) {
          throw error;
        }

        return (
          <main css={styles.container}>
            <div css={styles.skeletonImg} />
            <h2 css={styles.title}>네트워크 오류 발생</h2>
            <h2 css={styles.description}>
              {error.response?.data ?? error.message}
            </h2>
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
      }}
      onReset={reset}
      resetKeys={[key]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ApiErrorBoundary;
