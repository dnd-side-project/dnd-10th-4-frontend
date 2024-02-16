import React from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';

interface UnknownErrorBoundaryProps {
  FallbackComponent: React.ComponentType<FallbackProps>;
  children?: React.ReactNode;
}

const UnknownErrorBoundary = ({
  FallbackComponent,
  children,
}: UnknownErrorBoundaryProps) => {
  const { key } = useLocation();

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} resetKeys={[key]}>
      {children}
    </ErrorBoundary>
  );
};

export default UnknownErrorBoundary;
