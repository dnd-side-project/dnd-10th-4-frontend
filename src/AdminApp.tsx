import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/react';
import Background from '@/components/Background';
import BackgroundImg from '@/assets/background.webp';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnknownErrorBoundary';
import ApiErrorBoundary from '@/components/ErrorBoundary/ApiErrorBoundary';
import TitleHelmet from '@/components/TitleHelmet';
import RootUnknownFallback from './components/ErrorBoundary/fallback/RootUnknownFallback';
import RootApiFallback from './components/ErrorBoundary/fallback/RootApiFallback';
import 'react-toastify/dist/ReactToastify.css';

const AdminApp = () => {
  return (
    <>
      <TitleHelmet />
      <Background imageUrl={BackgroundImg}>
        <UnknownErrorBoundary FallbackComponent={RootUnknownFallback}>
          <ApiErrorBoundary FallbackComponent={RootApiFallback}>
            <Outlet />
          </ApiErrorBoundary>
        </UnknownErrorBoundary>
        <ToastContainer
          autoClose={1500}
          css={css({
            margin: '4rem 0 5rem 0',
            padding: '0 1rem',
            boxSizing: 'border-box',
          })}
        />
      </Background>
    </>
  );
};

export default AdminApp;
