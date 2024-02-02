import { Outlet } from 'react-router-dom';
import Background from '@/components/Background';
import BackgroundImg from '@/assets/ocean.jpeg';

const App = () => {
  return (
    <Background imageUrl={BackgroundImg}>
      <Outlet />
    </Background>
  );
};

export default App;
