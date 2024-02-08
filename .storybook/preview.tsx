import React from 'react';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../src/api/queryClient';
import mockHandlers from '../src/mocks/handlers';
import { SKIP_MSW_WARNING_URL } from '../src/constants/msw';
import 'reset-css';
import '../src/main.css';

// Initialize MSW
initialize(
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
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
