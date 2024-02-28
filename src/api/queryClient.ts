import { toast } from 'react-toastify';
import { QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

export const mutationDefaultErrorHandler = (err: Error) => {
  const message = isAxiosError(err)
    ? err.response?.data || err.message
    : err.message;

  console.error(err);
  toast.error(message, {
    autoClose: 1500,
    position: 'bottom-center',
  });
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 60000,
    },
    mutations: {
      onError: mutationDefaultErrorHandler,
    },
  },
});

export default queryClient;
