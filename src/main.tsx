import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/api/queryClient';
import { router } from '@/router';
import 'reset-css';
import './main.css';

async function enableMocking() {
  if (import.meta.env.VITE_MSW !== 'on') {
    return;
  }

  const { worker } = await import('@/mocks/browser');

  return worker.start();
}

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
