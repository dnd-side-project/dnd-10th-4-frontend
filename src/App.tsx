import { Link, Outlet } from 'react-router-dom';
import Background from '@/components/Background';
import BackgroundImg from '@/assets/ocean.jpeg';
import EmotionTestButton from '@/components/EmotionTestButton';
import { ROUTER_PATHS } from '@/router';

const App = () => {
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
      <Link to={ROUTER_PATHS.MODAL_TEST}>Modal Test Page</Link>
      <Outlet />
      <button css={{ width: '100%' }}>하단버튼</button>
    </Background>
  );
};

export default App;
