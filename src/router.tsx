import { createBrowserRouter } from 'react-router-dom';
import { readLetterStore } from './stores/useReadLetterStore';
import App from './App';
import SigninPage from './pages/SigninPage';
import SigninKakaoPage from './pages/SigninKakaoPage';
import OnboardingPage from './pages/OnboardingPage';
import LetterWritePage from './pages/LetterWritePage';
import MainPage from './pages/MainPage';
import LetterReceptionPage from './pages/LetterReceptionPage';
import MyPage from './pages/MyPage';
import LetterReplyPage from './pages/LetterReplyPage';
import LetterStoragePage from './pages/LetterStoragePage';
import LetterReceptionOnboardingPage from './pages/LetterReceptionOnboardingPage';

const ROUTER_PATHS = {
  ROOT: '/',
  SIGNIN: '/signin',
  SIGNIN_REDIRECT_KAKAO: '/signin/redirect/kakao',
  ONBOARDING: '/onboarding',
  LETTER_WRITE: '/write',
  LETTER_RECEPTION: (letterId: string) => `/reception/${letterId}`,
  LETTER_RECEPTION_ONBOARDING: '/reception/onboarding',
  MYPAGE: '/mypage',
  LETTER_REPLY: (letterId: string) => `/reply/${letterId}`,
  LETTER_STORAGE: `/storage`,
} as const;

const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.ROOT,
    element: <App />,
    children: [
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
        path: ROUTER_PATHS.MYPAGE,
        element: <MyPage />,
      },
      {
        path: ROUTER_PATHS.LETTER_WRITE,
        element: <LetterWritePage />,
      },
      {
        path: ROUTER_PATHS.LETTER_RECEPTION_ONBOARDING,
        element: <LetterReceptionOnboardingPage />,
      },
      {
        path: ROUTER_PATHS.LETTER_RECEPTION(':letterId'),
        element: <LetterReceptionPage />,
        loader: ({ params }) => {
          readLetterStore.getState().addReception(Number(params.letterId));
          return null;
        },
      },
      {
        path: ROUTER_PATHS.LETTER_REPLY(':letterId'),
        element: <LetterReplyPage />,
        loader: ({ params }) => {
          readLetterStore.getState().addReply(Number(params.letterId));
          return null;
        },
      },
      {
        path: ROUTER_PATHS.LETTER_STORAGE,
        element: <LetterStoragePage />,
      },
      {
        path: '*',
        element: <div>잘못된 경로입니다.</div>,
      },
    ],
  },
]);

export { ROUTER_PATHS, router };
