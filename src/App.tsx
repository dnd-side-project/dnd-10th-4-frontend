import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Background from '@/components/Background';
import BackgroundImg from '@/assets/ocean.jpeg';
import EmotionTestButton from '@/components/EmotionTestButton';
import { ROUTER_PATHS } from '@/router';
import BottomSheet from './components/BottomSheet';

const App = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Background imageUrl={BackgroundImg}>
      <h1>
        Hello World! Hello World! Hello World! Hello World! Hello World! Hello
        World! Hello World! Hello World! Hello World! Hello World! Hello World!
        Hello World! Hello World! Hello World! Hello World!
      </h1>
      <p>Vercel 배포!</p>
      <EmotionTestButton size="small">이모션 테스트</EmotionTestButton>
      <Link to={ROUTER_PATHS.TEST_CONSTANT}>Test Constant Page</Link>
      <Link to={ROUTER_PATHS.TEST_VARIABLE('5')}>Test 5 Page</Link>
      <Outlet />
      <button
        css={{ width: '100%', height: '50px' }}
        onClick={toggleDrawer(true)}
      >
        하단버튼
      </button>
      <BottomSheet
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <h1 css={{ fontSize: '5rem' }}>안녕</h1>
      </BottomSheet>
    </Background>
  );
};

export default App;
