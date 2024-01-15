import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATHS } from './constants/routerPaths';
import App from './App';

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

export default router;
