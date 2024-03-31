import { createBrowserRouter } from 'react-router-dom';
import { letterSlideStore } from './stores/useLetterSlideStore';
import AuthLayout from './layouts/AuthLayout';
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
import NotFoundPage from './pages/NotFoundPage';
import { ROUTER_PATHS } from './constants/routerPaths';
import AdminLayout from './layouts/AdminLayout';
import AdminMainPage from './pages/AdminMainPage';
import AdminApp from './AdminApp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: ROUTER_PATHS.SIGNIN,
        element: <SigninPage />,
      },
      {
        path: ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO,
        element: <SigninKakaoPage />,
      },
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            path: ROUTER_PATHS.ROOT,
            element: <MainPage />,
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
            path: ROUTER_PATHS.LETTER_RECEPTION(':letterId'),
            element: <LetterReceptionPage />,
            loader: ({ params }) => {
              letterSlideStore
                .getState()
                .readReception(Number(params.letterId));
              return null;
            },
          },
          {
            path: ROUTER_PATHS.LETTER_REPLY(':letterId'),
            element: <LetterReplyPage />,
            loader: ({ params }) => {
              letterSlideStore.getState().readReply(Number(params.letterId));
              return null;
            },
          },
          {
            path: ROUTER_PATHS.LETTER_STORAGE,
            element: <LetterStoragePage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AdminApp />,
    children: [
      {
        path: '/',
        element: <AdminLayout />,
        children: [
          {
            path: ROUTER_PATHS.ADMIN,
            element: <AdminMainPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export { router };
