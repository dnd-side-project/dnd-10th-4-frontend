import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { isAxiosError } from 'axios';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { ROUTER_PATHS } from '@/router';
import Button from '../Button';
import styles from './styles';

interface RootErrorBoundaryProps {
  children?: React.ReactNode;
}

const RootErrorBoundary = ({ children }: RootErrorBoundaryProps) => {
  const navigate = useNavigate();
  const { key } = useLocation();

  return (
    <ErrorBoundary
      onError={(error) => {
        const scope = Sentry.getCurrentScope();
        scope.setTag('type', 'root');

        Sentry.captureException(error);
      }}
      fallbackRender={({ error }) => {
        if (
          isAxiosError(error) &&
          error.response?.data === ERROR_RESPONSES.reissueFailed
        ) {
          navigate(ROUTER_PATHS.SIGNIN);
          return;
        }

        return (
          <main css={styles.container}>
            <div css={styles.skeletonImg} />
            <h2 css={styles.title}>문제가 발생했어요</h2>
            <h2 css={styles.description}>
              {error.response?.data ?? error.message}
            </h2>
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
      }}
      resetKeys={[key]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RootErrorBoundary;
