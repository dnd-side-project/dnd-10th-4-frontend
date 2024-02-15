import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import * as Sentry from '@sentry/react';
import queryClient from '@/api/queryClient';
import { router } from '@/router';
import { SKIP_MSW_WARNING_URL } from './constants/msw';
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
    }),
  ],
  environment: import.meta.env.PROD ? 'production' : 'development',
  // enabled: import.meta.env.PROD, // TODO: 추후에 프로덕션 배포에서만 에러 수집하도록 주석 제거하기
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost'],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const enableMocking = async () => {
  if (import.meta.env.VITE_MSW !== 'on') {
    return;
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
