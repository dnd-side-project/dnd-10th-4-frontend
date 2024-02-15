import { Outlet } from 'react-router-dom';
import Background from '@/components/Background';
import BackgroundMusic from '@/assets/background.mp3';
import BackgroundImg from '@/assets/background.png';
import Audio from '@/components/Audio';
import RootErrorBoundary from '@/components/ErrorBoundary/RootErrorBoundary';
import ApiErrorBoundary from '@/components/ErrorBoundary/ApiErrorBoundary';

const App = () => {
  return (
    <Background imageUrl={BackgroundImg}>
      <RootErrorBoundary>
        <ApiErrorBoundary>
          <Outlet />
        </ApiErrorBoundary>
      </RootErrorBoundary>
      <Audio src={BackgroundMusic} />
    </Background>
  );
};

export default App;
