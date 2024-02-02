import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ModalTestPage from './pages/ModalTestPage';
import LetterWritePage from './pages/LetterWritePage';

const ROUTER_PATHS = {
  ROOT: '/',
  TEST_CONSTANT: '/test/const',
  TEST_VARIABLE: (variableId: string) => `/test/variable/${variableId}`,
  MODAL_TEST: '/modal-test',
  LETTER_WRITE: '/write',
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
        path: ROUTER_PATHS.LETTER_WRITE,
        element: <LetterWritePage />,
      },
    ],
  },
]);

export { ROUTER_PATHS, router };
