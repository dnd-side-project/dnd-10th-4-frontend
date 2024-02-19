import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
      <UnknownErrorBoundary FallbackComponent={RootUnknownFallback}>
        <ApiErrorBoundary FallbackComponent={RootApiFallback}>
          <Outlet />
        </ApiErrorBoundary>
      </UnknownErrorBoundary>
      <Audio src={BackgroundMusic} />
      <ToastContainer />
    </Background>
  );
};

export default App;
