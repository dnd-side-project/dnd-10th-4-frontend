import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import * as Sentry from '@sentry/react';
import queryClient from '@/api/queryClient';
import { router } from '@/router';
import { SKIP_MSW_WARNING_URL } from './constants/msw';
import STORAGE_KEYS from './constants/storageKeys';
import 'reset-css';
import './main.css';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
      networkDetailAllowUrls: [import.meta.env.VITE_BACKEND_ENDPOINT],
      networkRequestHeaders: ['accessToken'],
    }),
  ],
  environment: import.meta.env.VITE_VERCEL_PREVIEW
    ? 'preview'
    : import.meta.env.PROD
      ? 'production'
      : 'development',
  enabled: import.meta.env.PROD,
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost'],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const enableMocking = async () => {
  if (import.meta.env.VITE_MSW !== 'on') {
    return;
  }

  if (
    import.meta.env.PROD &&
    !localStorage.getItem(STORAGE_KEYS.refreshToken)
  ) {
    localStorage.setItem(STORAGE_KEYS.accessToken, 'fresh');
    localStorage.setItem(STORAGE_KEYS.refreshToken, 'fresh');
  }

  const { worker } = await import('@/mocks/browser');

  return worker.start({
    onUnhandledRequest(request, print) {
      if (SKIP_MSW_WARNING_URL.some((url) => request.url.includes(url))) {
        return;
      }

      print.warning();
    },
  });
};

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>,
  ),
);
