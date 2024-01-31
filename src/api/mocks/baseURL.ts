import { BACKEND_ENDPOINT } from '@/constants/endpoint';

export const baseURL = (path: string) => {
  return BACKEND_ENDPOINT + path;
};
