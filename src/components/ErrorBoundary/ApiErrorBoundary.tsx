import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

interface ApiErrorBoundaryProps {
  FallbackComponent: React.ComponentType<FallbackProps>;
  children?: React.ReactNode;
}

const ApiErrorBoundary = ({
  FallbackComponent,
  children,
}: ApiErrorBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const { key } = useLocation();

  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={reset}
      resetKeys={[key]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ApiErrorBoundary;
