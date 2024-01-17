import { Link, Outlet } from 'react-router-dom';
import EmotionTestButton from '@/components/EmotionTestButton';
import { ROUTER_PATHS } from './constants/routerPaths';

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>Vercel 배포!</p>
      <EmotionTestButton size="small">이모션 테스트</EmotionTestButton>
      <Link to={ROUTER_PATHS.TEST_CONSTANT}>Test Constant Page</Link>
      <Link to={ROUTER_PATHS.TEST_VARIABLE('5')}>Test 5 Page</Link>
      <Outlet />
    </>
  );
};

export default App;
