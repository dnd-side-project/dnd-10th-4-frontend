import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ModalTestPage from './pages/ModalTestPage';
import SigninPage from './pages/SigninPage';
import SigninKakaoPage from './pages/SigninKakaoPage';
import OnboardingPage from './pages/OnboardingPage';
import LetterWritePage from './pages/LetterWritePage';
import MainPage from './pages/MainPage';
import LetterReceptionPage from './pages/LetterReceptionPage/intex';

const ROUTER_PATHS = {
  ROOT: '/',
  TEST_CONSTANT: '/test/const',
  TEST_VARIABLE: (variableId: string) => `/test/variable/${variableId}`,
  MODAL_TEST: '/modal-test',
  SIGNIN: '/signin',
  SIGNIN_REDIRECT_KAKAO: '/signin/redirect/kakao',
  ONBOARDING: '/onboarding',
  LETTER_WRITE: '/write',
  LETTER_RECEPTION: (letterId: string) => `/reception/${letterId}`,
} as const;

const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.ROOT,
    element: <App />,
    children: [
      {
        path: ROUTER_PATHS.TEST_CONSTANT,
        element: <div>test constant path</div>,
      },
      {
        path: ROUTER_PATHS.TEST_VARIABLE(':variableId'),
        element: <div>test variable path</div>,
      },
      {
        path: ROUTER_PATHS.MODAL_TEST,
        element: <ModalTestPage />,
      },
      {
        path: ROUTER_PATHS.ROOT,
        element: <MainPage />,
      },
      {
        path: ROUTER_PATHS.SIGNIN,
        element: <SigninPage />,
      },
      {
        path: ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO,
        element: <SigninKakaoPage />,
      },
      {
        path: ROUTER_PATHS.ONBOARDING,
        element: <OnboardingPage />,
      },
      {
        path: ROUTER_PATHS.LETTER_WRITE,
        element: <LetterWritePage />,
      },
      {
        path: ROUTER_PATHS.LETTER_RECEPTION(':letterId'),
        element: <LetterReceptionPage />,
      },
      {
        path: '*',
        element: <div>잘못된 경로입니다.</div>,
      },
    ],
  },
]);

export { ROUTER_PATHS, router };
