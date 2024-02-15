import React from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { useLocation, useNavigate } from 'react-router-dom';

interface UnknownErrorBoundaryProps {
  FallbackComponent: React.ComponentType<FallbackProps>;
  children?: React.ReactNode;
}

const UnknownErrorBoundary = ({
  FallbackComponent,
  children,
}: UnknownErrorBoundaryProps) => {
  const navigate = useNavigate();
  const { key } = useLocation();

  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={() => navigate(-1)}
      resetKeys={[key]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default UnknownErrorBoundary;
