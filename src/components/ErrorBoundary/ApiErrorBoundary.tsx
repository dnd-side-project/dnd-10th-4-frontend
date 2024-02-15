import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ApiFallback from './fallback/ApiFallback';

interface ApiErrorBoundaryProps {
  children?: React.ReactNode;
}

const ApiErrorBoundary = ({ children }: ApiErrorBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const { key } = useLocation();

  return (
    <ErrorBoundary
      FallbackComponent={ApiFallback}
      onReset={reset}
      resetKeys={[key]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ApiErrorBoundary;
