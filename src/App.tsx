import { Outlet } from 'react-router-dom';
import Background from '@/components/Background';
import BackgroundMusic from '@/assets/background.mp3';
import BackgroundImg from '@/assets/background.png';
import Audio from './components/Audio';

const App = () => {
  return (
    <Background imageUrl={BackgroundImg}>
      <Outlet />
      <Audio src={BackgroundMusic} />
    </Background>
  );
};

export default App;
