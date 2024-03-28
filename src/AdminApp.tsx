import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/react';
import Background from '@/components/Background';
import BackgroundImg from '@/assets/background.png';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnknownErrorBoundary';
import ApiErrorBoundary from '@/components/ErrorBoundary/ApiErrorBoundary';
import RootApiFallback from './components/ErrorBoundary/fallback/RootApiFallback';
import RootUnknownFallback from './components/ErrorBoundary/fallback/RootUnknownFallback';
import 'react-toastify/dist/ReactToastify.css';

const AdminApp = () => {
  return (
    <Background imageUrl={BackgroundImg}>
      <UnknownErrorBoundary FallbackComponent={RootUnknownFallback}>
        <ApiErrorBoundary FallbackComponent={RootApiFallback}>
          <Outlet />
        </ApiErrorBoundary>
      </UnknownErrorBoundary>
      <ToastContainer
        css={css({
          margin: '4rem 0 5rem 0',
          padding: '0 1rem',
          boxSizing: 'border-box',
        })}
      />
    </Background>
  );
};

export default AdminApp;
