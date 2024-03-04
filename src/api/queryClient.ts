import { toast } from 'react-toastify';
import { QueryClient, type QueryClientConfig } from '@tanstack/react-query';
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

export const queryClientConfig: QueryClientConfig = {
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
};

const queryClient = new QueryClient(queryClientConfig);

export default queryClient;
