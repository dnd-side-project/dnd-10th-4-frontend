import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/react';
import Background from '@/components/Background';
import BackgroundMusic from '@/assets/background.mp3';
import BackgroundImg from '@/assets/background.png';
import Audio from '@/components/Audio';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnknownErrorBoundary';
import ApiErrorBoundary from '@/components/ErrorBoundary/ApiErrorBoundary';
import RootUnknownFallback from './components/ErrorBoundary/fallback/RootUnknownFallback';
import RootApiFallback from './components/ErrorBoundary/fallback/RootApiFallback';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Background imageUrl={BackgroundImg}>
      <div css={styles.root}>
        <UnknownErrorBoundary FallbackComponent={RootUnknownFallback}>
          <ApiErrorBoundary FallbackComponent={RootApiFallback}>
            <Outlet />
          </ApiErrorBoundary>
        </UnknownErrorBoundary>
        <Audio src={BackgroundMusic} />
        <ToastContainer
          autoClose={1500}
          css={css({
            margin: '4rem 0 5rem 0',
            padding: '0 1rem',
            boxSizing: 'border-box',
          })}
        />
      </div>
    </Background>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  `,
};

export default App;
