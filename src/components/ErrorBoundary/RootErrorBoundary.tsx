import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation, useNavigate } from 'react-router-dom';
import UnknownFallback from './fallback/UnknownFallback';

interface RootErrorBoundaryProps {
  children?: React.ReactNode;
}

const RootErrorBoundary = ({ children }: RootErrorBoundaryProps) => {
  const navigate = useNavigate();
  const { key } = useLocation();

  return (
    <ErrorBoundary
      FallbackComponent={UnknownFallback}
      onReset={() => navigate(-1)}
      resetKeys={[key]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RootErrorBoundary;
