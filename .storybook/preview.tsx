import React from 'react';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../src/api/queryClient';
import mockHandlers from '../src/api/mocks/handlers';
import 'reset-css';
import '../src/main.css';

// Initialize MSW
initialize({}, mockHandlers);

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
