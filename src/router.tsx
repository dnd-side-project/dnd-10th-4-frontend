import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const ROUTER_PATHS = {
  ROOT: '/',
  TEST_CONSTANT: '/test/const',
  TEST_VARIABLE: (variableId: string) => `/test/variable/${variableId}`,
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
    ],
  },
]);

export { ROUTER_PATHS, router };
