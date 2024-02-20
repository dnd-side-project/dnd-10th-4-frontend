import React from 'react';
import type { Preview } from '@storybook/react';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';
import { initialize as initializeMSW, mswLoader } from 'msw-storybook-addon';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../src/api/queryClient';
import mockHandlers from '../src/mocks/handlers';
import { SKIP_MSW_WARNING_URL } from '../src/constants/msw';
import STORAGE_KEYS from '../src/constants/storageKeys';
import 'reset-css';
import '../src/main.css';

localStorage.setItem(STORAGE_KEYS.accessToken, 'fresh');
localStorage.setItem(STORAGE_KEYS.refreshToken, 'fresh');

initializeMSW(
  {
    onUnhandledRequest(request, print) {
      if (SKIP_MSW_WARNING_URL.some((url) => request.url.includes(url))) {
        return;
      }

      print.warning();
    },
  },
  mockHandlers,
);

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
    withRouter,
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({
      routing: {
        path: '*',
        handle: 'handle every route',
      },
    }),
  },
};

export default preview;
